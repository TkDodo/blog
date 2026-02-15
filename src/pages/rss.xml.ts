import type { RSSFeedItem } from "@astrojs/rss";
import type { APIRoute } from "astro";
import rss from "@astrojs/rss";
import { SITE } from "@constants";
import { getPostSlug, sortAsc } from "@utils";
import { getCollection } from "astro:content";

function generateContent(description: string, link: string) {
  return `<p>${description}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${SITE.url}/blog/${link}">Keep reading</a>.</strong></div>`;
}

export const GET: APIRoute = async () => {
  const normalizedBase = import.meta.env.BASE_URL.replace(/^\/|\/$/g, "");
  const siteWithBase = new URL(
    normalizedBase ? `${normalizedBase}/` : "",
    SITE.url,
  );
  const items = sortAsc(await getCollection("blog")).map(
    (entry) =>
      ({
        title: entry.data.title,
        description: entry.data.description,
        content: generateContent(entry.data.description, getPostSlug(entry)),
        link: getPostSlug(entry),
        pubDate: entry.data.date,
      }) satisfies RSSFeedItem,
  );

  return rss({
    trailingSlash: false,
    title: SITE.titleDefault,
    description: SITE.description,
    site: siteWithBase.toString(),
    items,
    customData: "<language>en-us</language>",
  });
};
