import fs from "node:fs";
import { describe, expect, it } from "vitest";

describe("standard.site configuration", () => {
  it("publishes generated rendered content through Sequoia", () => {
    const config = JSON.parse(fs.readFileSync("sequoia.json", "utf-8"));

    expect(config.siteUrl).toBe("https://tkdodo.eu");
    expect(config.contentDir).toBe("./.sequoia/generated/posts");
    expect(config.outputDir).toBe("./dist");
    expect(config.pathPrefix).toBe("/blog");
    expect(config.removeIndexFromSlug).toBe(true);
    expect(config.frontmatter.publishDate).toBe("date");
    expect(config.frontmatter.slugField).toBe("slug");
    expect(config.frontmatter.coverImage).toBe("ogImage");
    expect(config.textContentField).toBeUndefined();
    expect(config.publishContent).toBe(false);
    expect(config.bluesky).toMatchObject({ maxAgeDays: 7 });
    expect(typeof config.bluesky.enabled).toBe("boolean");
  });

  it("keeps well-known publication verification in sync", () => {
    const config = JSON.parse(fs.readFileSync("sequoia.json", "utf-8"));
    const verification = fs
      .readFileSync("public/.well-known/site.standard.publication", "utf-8")
      .trim();

    expect(verification).toBe(config.publicationUri);
    expect(verification).toMatch(
      /^at:\/\/did:plc:3nqrhu5mthmias3zc4a2ovzj\/site\.standard\.publication\//,
    );
  });
});
