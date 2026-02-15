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
  const config = {
    repo: REPO,
    repoId: REPO_ID,
    category: CATEGORY,
    categoryId: CATEGORY_ID,
  };

  return (
    <section className="mt-12 pt-6 border-t border-border">
      <div className="giscus" />
      <script>
        {`
          (() => {
            const giscusRoot = document.querySelector(".giscus");
            if (!giscusRoot) return;

            const getTheme = () =>
              document.documentElement.dataset.theme === "dark" ? "dark" : "light";

            const injectGiscus = () => {
              if (giscusRoot.querySelector("script[data-giscus-script='1']")) return;
              const script = document.createElement("script");
              script.src = "https://giscus.app/client.js";
              script.async = true;
              script.crossOrigin = "anonymous";
              script.setAttribute("data-giscus-script", "1");
              script.setAttribute("data-repo", ${JSON.stringify(config.repo)});
              script.setAttribute("data-repo-id", ${JSON.stringify(config.repoId)});
              script.setAttribute("data-category", ${JSON.stringify(config.category)});
              script.setAttribute("data-category-id", ${JSON.stringify(config.categoryId)});
              script.setAttribute("data-mapping", "pathname");
              script.setAttribute("data-strict", "0");
              script.setAttribute("data-reactions-enabled", "1");
              script.setAttribute("data-emit-metadata", "0");
              script.setAttribute("data-input-position", "top");
              script.setAttribute("data-theme", getTheme());
              script.setAttribute("data-lang", "en");
              giscusRoot.appendChild(script);
            };

            const updateGiscusTheme = () => {
              const iframe = document.querySelector("iframe.giscus-frame");
              if (!iframe || !iframe.contentWindow) return;
              iframe.contentWindow.postMessage(
                { giscus: { setConfig: { theme: getTheme() } } },
                "https://giscus.app"
              );
            };

            const onReady = () => {
              injectGiscus();
              updateGiscusTheme();

              const frameObserver = new MutationObserver(() => {
                updateGiscusTheme();
              });
              frameObserver.observe(giscusRoot, {
                childList: true,
                subtree: true,
              });

              const observer = new MutationObserver((mutations) => {
                for (const mutation of mutations) {
                  if (mutation.type === "attributes" && mutation.attributeName === "data-theme") {
                    updateGiscusTheme();
                  }
                }
              });
              observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ["data-theme"],
              });
            };

            if (document.readyState === "loading") {
              document.addEventListener("DOMContentLoaded", onReady, { once: true });
            } else {
              onReady();
            }
          })();
        `}
      </script>
    </section>
  );
}
