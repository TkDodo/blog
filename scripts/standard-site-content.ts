import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const DEFAULT_CONTENT_DIR = "content/posts";
const DEFAULT_OUTPUT_DIR = ".sequoia/generated/posts";

type GenerateOptions = {
  contentDir?: string;
  distDir?: string;
  outputDir?: string;
};

type GeneratedPost = {
  canonicalPath: string;
  coverImage: string;
  slug: string;
  title: string;
};

type FrontmatterValue =
  | string
  | number
  | boolean
  | Date
  | Array<string | number>;
type Frontmatter = Record<string, FrontmatterValue | undefined>;

function normalizePath(filePath: string) {
  return filePath.split(path.sep).join("/");
}

function stripSlashes(value: string) {
  return value.replace(/^\//, "").replace(/\/$/, "");
}

export function getStandardSiteSlug(filePath: string, explicitSlug?: string) {
  if (explicitSlug) {
    return stripSlashes(explicitSlug);
  }

  const normalized = normalizePath(filePath);
  const parts = normalized.split("/");
  const fileName = parts.at(-1);

  if (fileName === "index.mdx" || fileName === "index.md") {
    return parts.at(-2) ?? "";
  }

  return (fileName ?? "").replace(/\.mdx?$/, "");
}

async function listMdxFiles(dir: string): Promise<Array<string>> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return listMdxFiles(entryPath);
      }
      if (entry.isFile() && /\.mdx?$/.test(entry.name)) {
        return [entryPath];
      }
      return [];
    }),
  );

  return files.flat();
}

function toYamlScalar(value: FrontmatterValue): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  const stringValue = String(value);
  if (/^[A-Za-z0-9 _.,:;!?@/#'()&+-]+$/.test(stringValue)) {
    return stringValue;
  }

  return JSON.stringify(stringValue);
}

function renderFrontmatter(data: Frontmatter) {
  const lines = ["---"];
  const keys = ["title", "description", "date", "slug", "ogImage"] as const;

  for (const key of keys) {
    const value = data[key];
    if (value !== undefined) {
      lines.push(`${key}: ${toYamlScalar(value)}`);
    }
  }

  const tags = data.tags;
  if (Array.isArray(tags) && tags.length > 0) {
    lines.push("tags:");
    for (const tag of tags) {
      lines.push(`  - ${toYamlScalar(tag)}`);
    }
  }

  lines.push("---");
  lines.push("");
  lines.push("Source metadata is generated for standard.site publishing.");
  lines.push("");

  return lines.join("\n");
}

export async function generateStandardSiteContent(
  options: GenerateOptions = {},
): Promise<Array<GeneratedPost>> {
  const contentDir = options.contentDir ?? DEFAULT_CONTENT_DIR;
  const outputDir = options.outputDir ?? DEFAULT_OUTPUT_DIR;

  const files = await listMdxFiles(contentDir);
  await fs.rm(outputDir, { recursive: true, force: true });

  const generated: Array<GeneratedPost> = [];

  for (const file of files) {
    const source = await fs.readFile(file, "utf-8");
    const parsed = matter(source);
    const data = parsed.data as Frontmatter;
    const explicitSlug =
      typeof data.slug === "string" ? stripSlashes(data.slug) : undefined;
    const slug = getStandardSiteSlug(file, explicitSlug);
    const coverImage = `${slug}.png`;
    const outputFile = path.join(outputDir, slug, "index.mdx");

    await fs.mkdir(path.dirname(outputFile), { recursive: true });
    await fs.writeFile(
      outputFile,
      renderFrontmatter({
        title: data.title,
        description: data.description,
        date: data.date,
        ogImage: coverImage,
        slug,
        tags: data.tags,
      }),
    );

    generated.push({
      canonicalPath: `/blog/${slug}`,
      coverImage,
      slug,
      title: String(data.title ?? slug),
    });
  }

  generated.sort((a, b) => a.slug.localeCompare(b.slug));
  return generated;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const generated = await generateStandardSiteContent();
  console.log(`Generated ${generated.length} standard.site post files`);
  if (process.argv.includes("--details")) {
    for (const post of generated) {
      console.log(`${post.canonicalPath}\t${post.coverImage}\t${post.title}`);
    }
  }
}
