# Gatsby -> Astro Migration Notes

## Current status

- Astro baseline from `LekoArts/astro-theme-minimal-blog` is set up in this folder.
- Existing content from `../content/posts` is migrated to `content/blog/posts`.
- Build succeeds (`pnpm build`).
- Site is configured for `base: /blog` to match your current deployment path.

## Carried over

- Site metadata and navigation adapted to your blog.
- Netlify redirect/proxy rules copied into `netlify.toml`.
- Public/static assets copied from your Gatsby site.
- Blog posts, tags, RSS feed and listing pages wired to your frontmatter format.

## Temporary compatibility layer

To avoid rewriting all custom components up front, MDX imports from `components/*`
are currently resolved through `src/content-components/*` placeholder implementations.

These are intentionally minimal for migration safety and should be replaced incrementally:

- Comments / Giscus
- Tweet embeds and tweet images
- Series TOCs (`rq-toc`, `tsr-toc`, `ds-toc`)
- Sponsors components
- Presentation embeds
- Query.gg widget
- Gif player and other interactive embeds

## Known follow-up items

- Replace placeholder `components/*` with production Astro/React components.
- Port analytics and error tracking (`Plausible`, `Sentry`).
- Reintroduce custom typography/styles from Gatsby theme overrides.
- Decide whether to keep `astro-expressive-code` or switch to a code-fence setup compatible with your current info-string format.
  - Current build works but logs many warnings because old info strings like `ts:title=...` are interpreted as unknown languages.
- Clean up duplicate tag slugs caused by differently cased tags (e.g. `React` and `ReactJs`).
