import type { Options as AutolinkHeadingsOptions } from "rehype-autolink-headings";
import type { Options as ExternalLinkOptions } from "rehype-external-links";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import remarkSandpack from "@lekoarts/remark-sandpack";
import sentry from "@sentry/astro";
import tailwindcss from "@tailwindcss/vite";
import { imageService } from "@unpic/astro/service";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import { toString } from "hast-util-to-string";
import { h, s } from "hastscript";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";
import remarkDirective from "remark-directive";
import remarkSmartypants from "remark-smartypants";
import { SITE } from "./src/constants";
import { remarkAsides, remarkLegacyCodeFenceInfo } from "./src/remark";
import { pagefindIntegration } from "./src/utils";

export default defineConfig({
  output: "static",
  base: "/blog",
  trailingSlash: "never",
  site: SITE.url,
  integrations: [
    ...(process.env.NODE_ENV === "production"
      ? [
          sentry({
            org: process.env.SENTRY_ORG,
            project: process.env.SENTRY_PROJECT,
            authToken: process.env.SENTRY_AUTH_TOKEN,
          }),
        ]
      : []),
    expressiveCode(),
    mdx(),
    sitemap(),
    pagefindIntegration(),
    react(),
  ],
  vite: {
    server: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    preview: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    ssr: {
      noExternal: [
        "react-spring-carousel",
        "react-spring",
        "@react-spring/web",
      ],
    },
    resolve: {
      dedupe: ["react", "react-dom"],
    },
    plugins: [tailwindcss()],
  },
  image: {
    service: imageService(),
  },
  devToolbar: {
    enabled: false,
  },
  markdown: {
    remarkPlugins: [
      // @ts-expect-error: Astro types don't match remark plugin
      [remarkSmartypants, { backticks: false }],
      remarkDirective,
      remarkAsides,
      remarkLegacyCodeFenceInfo,
      [remarkSandpack, { componentName: ["Playground"] }],
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["nofollow"],
          content: { type: "text", value: " (opens in a new window)" },
          properties: { className: ["external_link"] },
          contentProperties: { className: ["sr-only"] },
        } satisfies ExternalLinkOptions,
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "after",
          group() {
            return h(".group/heading.relative");
          },
          headingProperties() {
            return {
              tabIndex: -1,
              className:
                "focus:outline-none focus-visible:outline-none focus:shadow-none focus-visible:shadow-none",
            };
          },
          properties(node) {
            return {
              ariaLabel: `Permalink: ${toString(node)}`,
              className:
                "absolute left-[calc(-9*var(--spacing))] top-1/2 flex h-[calc(var(--spacing)*7)] w-[calc(var(--spacing)*10)] -translate-y-[calc(50%-0.1rem)] items-center justify-center pr-[calc(var(--spacing)*4)] opacity-0 transition-opacity duration-200 ease-in-out pointer-events-none group-hover/heading:opacity-100 group-hover/heading:pointer-events-auto group-focus-within/heading:opacity-100 group-focus-within/heading:pointer-events-auto focus-visible:outline-none focus-visible:shadow-none focus-visible:rounded-none focus-visible:[&_.anchor-icon]:rounded-[0.375rem] focus-visible:[&_.anchor-icon]:shadow-[0_0_0_2px_var(--color-primary),0_0_0_4px_color-mix(in_srgb,var(--color-primary)_24%,transparent)]",
            };
          },
          content() {
            return h(
              "svg",
              {
                className:
                  "anchor-icon inline-block !overflow-visible align-text-bottom fill-current h-[calc(var(--spacing)*5)] w-[calc(var(--spacing)*5)]",
                viewBox: "0 0 16 16",
                ariaHidden: true,
              },
              [
                s("path", {
                  d: "m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z",
                }),
              ],
            );
          },
        } satisfies AutolinkHeadingsOptions,
      ],
    ],
  },
});
