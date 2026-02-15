/**
 * Metadata for your site
 */
export const SITE: Record<string, string> = {
  url: "https://tkdodo.eu",
  title: "TkDodo's blog",
  titleDefault: "TkDodo's blog",
  description:
    "A technical blog about frontend-development, TypeScript and React",
  lang: "en-US",
  defaultOgImage: "/blog/blog-banner.png",
  defaultAuthor: "TkDodo",
};

interface Header {
  internal: Array<{ title: string; url: string }>;
  external: Array<{
    title: string;
    url: string;
    props?: Record<string, unknown>;
  }>;
}

/**
 * Links used in the header
 */
export const HEADER: Header = {
  internal: [
    { title: "Blog", url: "/all" },
    { title: "Tags", url: "/tags" },
    { title: "Sponsors", url: "/sponsors" },
    { title: "RSS Feed", url: "/rss.xml" },
  ],
  external: [
    {
      title: "Bluesky",
      url: "https://bsky.app/profile/tkdodo.eu",
      props: { target: "_blank", rel: "noreferrer noopener" },
    },
    {
      title: "GitHub",
      url: "https://github.com/tkdodo",
      props: { target: "_blank", rel: "noreferrer noopener" },
    },
  ],
};

export const SKIP_NAV_ID = "skip-to-content";

/**
 * Available "asides" that can be used in MDX files
 */
export const ASIDE_TYPES = ["note", "tip", "caution", "danger"] as const;
export type AsideType = (typeof ASIDE_TYPES)[number];
