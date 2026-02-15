const REPO =
  (import.meta.env.PUBLIC_GISCUS_REPO as string | undefined) ??
  "tkdodo/blog-comments";
const REPO_ID =
  (import.meta.env.PUBLIC_GISCUS_REPO_ID as string | undefined) ??
  "MDEwOlJlcG9zaXRvcnkyOTE1MzI1NjI=";
const CATEGORY =
  (import.meta.env.PUBLIC_GISCUS_CATEGORY as string | undefined) ??
  "Announcements";
const CATEGORY_ID =
  (import.meta.env.PUBLIC_GISCUS_CATEGORY_ID as string | undefined) ??
  "DIC_kwDOEWBvEs4COl22";

export default function Comments() {
  return (
    <section className="mt-12 pt-6 border-t border-border">
      <div className="giscus" />
      <script
        src="https://giscus.app/client.js"
        data-repo={REPO}
        data-repo-id={REPO_ID}
        data-category={CATEGORY}
        data-category-id={CATEGORY_ID}
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="en"
        crossOrigin="anonymous"
        async
      />
    </section>
  );
}
