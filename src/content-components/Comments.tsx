const REPO = import.meta.env.PUBLIC_GISCUS_REPO as string | undefined
const REPO_ID = import.meta.env.PUBLIC_GISCUS_REPO_ID as string | undefined
const CATEGORY = import.meta.env.PUBLIC_GISCUS_CATEGORY as string | undefined
const CATEGORY_ID = import.meta.env.PUBLIC_GISCUS_CATEGORY_ID as string | undefined

export default function Comments() {
  const hasGiscusConfig = Boolean(REPO && REPO_ID && CATEGORY && CATEGORY_ID)

  return (
    <section style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
      {hasGiscusConfig ? (
        <>
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
        </>
      ) : (
        <p style={{ margin: 0, opacity: 0.8 }}>
          Comments are available via Giscus. Configure `PUBLIC_GISCUS_*` environment variables to enable them.
        </p>
      )}
    </section>
  )
}
