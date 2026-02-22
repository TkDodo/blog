import { Buffer } from "node:buffer";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import satori from "satori";
import sharp from "sharp";
import OgImageTemplate from "./og-image-template";

interface Frontmatter {
  title?: string;
  banner?: string;
  tags?: string[];
  date?: string | Date;
}

function toDateLabel(date: string | Date | undefined): string {
  if (!date) return "";
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ] as const;

  if (date instanceof Date && !Number.isNaN(date.getTime())) {
    return `${monthNames[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
  }

  const raw = String(date).trim();
  const isoPrefixMatch = raw.match(/^(\d{4}-\d{2}-\d{2})/);
  if (isoPrefixMatch) {
    const [yearString, monthString] = isoPrefixMatch[1].split("-");
    const year = Number.parseInt(yearString, 10);
    const month = Number.parseInt(monthString, 10);
    if (month >= 1 && month <= 12) {
      return `${monthNames[month - 1]} ${year}`;
    }
  }

  const parsed = new Date(raw);
  if (!Number.isNaN(parsed.getTime())) {
    return `${monthNames[parsed.getUTCMonth()]} ${parsed.getUTCFullYear()}`;
  }

  return "";
}

function getImageFormat(bannerPath: string): "png" | "jpeg" {
  const ext = path.extname(bannerPath).toLowerCase();
  return ext === ".png" ? "png" : "jpeg";
}

async function generateOgImage(
  slug: string,
  postsRoot: string,
  outDir: string,
) {
  const mdxPath = path.join(postsRoot, slug, "index.mdx");
  try {
    await fs.access(mdxPath);
  } catch {
    console.warn(`Skipping ${slug}: no index.mdx found`);
    return;
  }
  const mdxSource = await fs.readFile(mdxPath, "utf8");
  const { data } = matter(mdxSource);
  const frontmatter = data as Frontmatter;

  if (!frontmatter.banner || !frontmatter.title) {
    console.warn(`Skipping ${slug}: missing title or banner in frontmatter`);
    return;
  }

  const tags = Array.isArray(frontmatter.tags)
    ? frontmatter.tags.filter((tag): tag is string => typeof tag === "string")
    : [];
  const tagsLine =
    tags.length > 0
      ? tags
          .map((tag) => tag.trim())
          .filter(Boolean)
          .slice(0, 3)
          .join(" • ")
      : "React • TypeScript • TanStack";
  const dateLabel = toDateLabel(frontmatter.date);

  const bannerPath = path.join(postsRoot, slug, frontmatter.banner);
  const banner = await fs.readFile(bannerPath);
  const metadata = await sharp(banner).metadata();
  const orientation =
    metadata.width && metadata.height && metadata.width >= metadata.height
      ? "landscape"
      : "portrait";

  const resizeProps =
    orientation === "landscape" ? { width: 760 } : { height: 420 };

  const resizedBanner = await sharp(banner)
    .resize({
      ...resizeProps,
      withoutEnlargement: true,
    })
    .toBuffer();

  const resizedMetadata = await sharp(resizedBanner).metadata();
  const format = getImageFormat(frontmatter.banner);
  const base64Banner = resizedBanner.toString("base64");
  const avatar = await fs.readFile(
    path.join(process.cwd(), "src", "assets", "profile-og.jpg"),
  );
  const avatarDataUri = `data:image/jpeg;base64,${avatar.toString("base64")}`;

  const svg = await satori(
    <OgImageTemplate
      title={frontmatter.title}
      avatarSrc={avatarDataUri}
      orientation={orientation}
      tagsLine={tagsLine}
      dateLabel={dateLabel}
      img={{
        src: `data:image/${format};base64,${base64Banner}`,
        width: resizedMetadata.width ?? 700,
        height: resizedMetadata.height ?? 500,
      }}
    />,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: await fs.readFile(
            path.join(process.cwd(), "public", "fonts", "Inter-Regular.woff"),
          ),
          weight: 400,
          style: "normal",
        },
      ],
    },
  );

  const outputPath = path.join(outDir, `${slug}.png`);
  await sharp(Buffer.from(svg))
    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
      force: true,
    })
    .toFile(outputPath);

  console.log(`Generated ${outputPath}`);
}

async function run() {
  const postsRoot = path.join(process.cwd(), "content", "posts");
  const outDir = path.join(process.cwd(), "public", "og-images");
  const entries = await fs.readdir(postsRoot, { withFileTypes: true });
  await fs.mkdir(outDir, { recursive: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const slug = entry.name;
    try {
      await generateOgImage(slug, postsRoot, outDir);
    } catch (error) {
      console.warn(`Failed to generate OG image for ${slug}:`, error);
    }
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
