import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/index.mdx", base: "./content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(""),
    date: z.coerce.date(),
    tags: z
      .array(
        z.union([z.string(), z.number()]).transform((value) => String(value)),
      )
      .optional()
      .default([]),
    banner: z.string().optional(),
    bluesky: z.url().optional(),
    slug: z.string().optional(),
    searchIndex: z.boolean().optional().default(true),
  }),
});

export const collections = {
  blog,
};
