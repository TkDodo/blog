import GithubSlugger from "github-slugger";
import { toString } from "hast-util-to-string";
import { visit } from "unist-util-visit";

interface HeadingNode {
  properties?: Record<string, unknown>;
  tagName?: string;
}

export function createLegacyCompatibleHeadingId(
  headingText: string,
  slugger: GithubSlugger,
  usedIds: Set<string>,
): string {
  const rawSlug = slugger.slug(headingText);
  const normalizedSlug = rawSlug.replace(/-+$/u, "");

  if (!normalizedSlug) {
    return rawSlug;
  }

  if (!usedIds.has(normalizedSlug)) {
    usedIds.add(normalizedSlug);
    return normalizedSlug;
  }

  let suffix = 1;
  let uniqueSlug = `${normalizedSlug}-${suffix}`;

  while (usedIds.has(uniqueSlug)) {
    suffix += 1;
    uniqueSlug = `${normalizedSlug}-${suffix}`;
  }

  usedIds.add(uniqueSlug);
  return uniqueSlug;
}

export function rehypeSlugCompat() {
  return (tree: unknown) => {
    const slugger = new GithubSlugger();
    const usedIds = new Set<string>();

    visit(tree as Parameters<typeof visit>[0], "element", (node) => {
      const headingNode = node as HeadingNode;
      const existingId = headingNode.properties?.id;

      if (typeof existingId === "string" && existingId.length > 0) {
        usedIds.add(existingId);
        return;
      }

      if (!/^h[1-6]$/u.test(headingNode.tagName ?? "")) {
        return;
      }

      const headingText = toString(node);
      if (!headingText) {
        return;
      }

      headingNode.properties ??= {};
      headingNode.properties.id = createLegacyCompatibleHeadingId(
        headingText,
        slugger,
        usedIds,
      );
    });
  };
}
