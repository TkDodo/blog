import GithubSlugger from "github-slugger";
import { describe, expect, it } from "vitest";
import { createLegacyCompatibleHeadingId } from "./rehype-slug-compat";

describe("createLegacyCompatibleHeadingId", () => {
  it("strips the trailing hyphen from emoji headings", () => {
    const slugger = new GithubSlugger();
    const usedIds = new Set<string>();

    expect(
      createLegacyCompatibleHeadingId("Happy New Year 🎉", slugger, usedIds),
    ).toBe("happy-new-year");
  });

  it("strips the trailing hyphen from punctuation headings", () => {
    const slugger = new GithubSlugger();
    const usedIds = new Set<string>();

    expect(
      createLegacyCompatibleHeadingId("What about Arrays?", slugger, usedIds),
    ).toBe("what-about-arrays");
  });

  it("keeps ids unique after normalization", () => {
    const slugger = new GithubSlugger();
    const usedIds = new Set<string>();

    expect(
      createLegacyCompatibleHeadingId("Happy New Year", slugger, usedIds),
    ).toBe("happy-new-year");
    expect(
      createLegacyCompatibleHeadingId("Happy New Year 🎉", slugger, usedIds),
    ).toBe("happy-new-year-1");
  });
});
