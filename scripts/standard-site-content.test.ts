import fs from "node:fs/promises";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  generateStandardSiteContent,
  getStandardSiteSlug,
} from "./standard-site-content";

const tmpDirs: Array<string> = [];

afterEach(async () => {
  await Promise.all(
    tmpDirs
      .splice(0)
      .map((dir) => fs.rm(dir, { recursive: true, force: true })),
  );
});

async function createTmpDir() {
  const dir = await fs.mkdtemp(path.join(process.cwd(), ".tmp-standard-site-"));
  tmpDirs.push(dir);
  return dir;
}

describe("getStandardSiteSlug", () => {
  it("prefers explicit frontmatter slugs", () => {
    expect(
      getStandardSiteSlug("content/posts/folder/index.mdx", "custom"),
    ).toBe("custom");
  });

  it("falls back to the parent folder for index.mdx posts", () => {
    expect(getStandardSiteSlug("content/posts/my-post/index.mdx")).toBe(
      "my-post",
    );
  });
});

describe("generateStandardSiteContent", () => {
  it("writes generated MDX with metadata-only standard.site frontmatter", async () => {
    const rootDir = await createTmpDir();
    const contentDir = path.join(rootDir, "content/posts");
    const outputDir = path.join(rootDir, ".sequoia/generated/posts");

    await fs.mkdir(path.join(contentDir, "my-post"), { recursive: true });
    await fs.writeFile(
      path.join(contentDir, "my-post/index.mdx"),
      `---
title: My Post
description: A useful post
date: 2026-05-29
slug: my-custom-post
tags:
  - React
  - TypeScript
---

import Aside from '@components/Aside'

<Aside>Implementation detail</Aside>

Article source
`,
    );

    const result = await generateStandardSiteContent({
      contentDir,
      outputDir,
    });

    expect(result).toEqual([
      {
        canonicalPath: "/blog/my-custom-post",
        coverImage: "my-custom-post.png",
        slug: "my-custom-post",
        title: "My Post",
      },
    ]);

    const generated = await fs.readFile(
      path.join(outputDir, "my-custom-post/index.mdx"),
      "utf-8",
    );

    expect(generated).toContain('title: "My Post"');
    expect(generated).toContain('description: "A useful post"');
    expect(generated).toContain("date: 2026-05-29");
    expect(generated).toContain('ogImage: "my-custom-post.png"');
    expect(generated).toContain('slug: "my-custom-post"');
    expect(generated).toContain('- "React"');
    expect(generated).toContain(
      "Source metadata is generated for standard.site publishing.",
    );
  });

  it("writes valid YAML when a description contains a colon", async () => {
    const rootDir = await createTmpDir();
    const contentDir = path.join(rootDir, "content/posts");
    const outputDir = path.join(rootDir, ".sequoia/generated/posts");

    await fs.mkdir(path.join(contentDir, "prefetching"), { recursive: true });
    await fs.writeFile(
      path.join(contentDir, "prefetching/index.mdx"),
      `---
title: Reliable Query Prefetching with TanStack Router
description: 'Prefetching is great, but comes at a cost: Keep loaders in sync.'
date: 2026-08-18
---
`,
    );

    await expect(
      generateStandardSiteContent({ contentDir, outputDir }),
    ).resolves.toHaveLength(1);

    const generated = await fs.readFile(
      path.join(outputDir, "prefetching/index.mdx"),
      "utf-8",
    );

    expect(generated).toContain(
      'description: "Prefetching is great, but comes at a cost: Keep loaders in sync."',
    );
  });
});
