# Astro Theme: Minimal Blog

Welcome to **Astro Theme: Minimal Blog**, an ideal option to start sharing your ideas. It's easy to set up and features everything you'd need for a blog.

[**Demo Website**](https://astro-theme-minimal-blog.lekoarts.de)

## ✨ Features

- Write blog posts with MDX
- Styled with [Tailwind](https://tailwindcss.com/)
- Code blocks powered by [Expressive Code](https://expressive-code.com/)
- Custom asides component
- Live coding powered by [Sandpack](https://github.com/codesandbox/sandpack)
- RSS, Sitemap
- Light/Dark/System color mode toggle
- Add tags to your blog posts
- [Pagefind](https://pagefind.app/) search

## 🚀 Getting started

1. **Important:** Ensure that [pnpm](https://pnpm.io/installation) is installed
1. Clone the [astro-theme-minimal-blog](https://github.com/LekoArts/astro-theme-minimal-blog) repository.
1. Install dependencies.
   ```shell
   pnpm install
   ```
1. Run the development server.
   ```shell
   pnpm dev
   ```

## 📝 Using & modifying this theme

### Add content

This theme features a CLI to help you scaffold new blog posts. It asks you questions to fill out the frontmatter and creates a file in the end. Run the CLI:

```shell
pnpm assistant
```

If you want to extend it, change the [`assistant.ts`](./scripts/assistant.ts) file.

### Change constants

Parts of the theme are referencing [`constants.ts`](./src/constants.ts) to e.g. set the site title or main navigation. Modify its contents to suit your site before deploying it.

### Change existing tags / Add new tags

Inside [`constants.ts`](./src/constants.ts) the `FRONTMATTER_TAGS` map contains the available tags for your site. You need to add your display name and slug of the tag inside this map. The display name will be used in the UI and the slug will be used in the URL.

It's referenced by Astro's content collections and also by the [`assistant.ts`](./scripts/assistant.ts) file.

You can add a new tag like so:

```ts
export const FRONTMATTER_TAGS = new Map(
	[
		// Existing tags...
		['Display name', 'slug-of-your-tag'] as const,
	],
)
```

## 🔍 Reference

### Blog post frontmatter

By default, these frontmatter fields are available. You need to change [`content.config.ts`](./src/content.config.ts) to adjust it.

```yaml
title: Markdown Reference Overview
slug: markdown-reference-overview
description: A post showcasing the markdown formatting of a post
date: 2025-02-18
lastUpdated: 2025-02-18
tags:
  - General
  - MDX
searchIndex: true
image: https://absolute-link.google.com/image.png
```

### Custom MDX components

#### `<Aside>`

```md
:::note
Text
:::

:::caution[Watch out!]
Text
:::

:::tip
Text
:::

:::danger
Text
:::
```

Read the [Aside Example](./content/blog/2025-04-02--mdx-asides/index.mdx) to learn more.

#### `<Playground>`

````md
<Playground template="react">

```js name=App.js active
export default function App() {
  return <h1>Hello World</h1>
}
```

</Playground>
````

Read the [Playground Example](./content/blog/2025-06-23--live-coding-with-sandpack/index.mdx) to learn more.
