import { QueryGG } from "components/QueryGG";

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

type CommentsProps = {
  withSeparator?: boolean;
};

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
const withBasePath = (url: string) =>
  url.startsWith("/") ? `${basePath}${url}` : url;

export default function Comments({ withSeparator = true }: CommentsProps) {
  const config = {
    repo: REPO,
    repoId: REPO_ID,
    category: CATEGORY,
    categoryId: CATEGORY_ID,
  };

  return (
    <section
      className={`not-prose mt-12 pt-6 ${withSeparator ? "border-t border-border" : ""}`}
    >
      <div className="flex flex-col gap-3">
        <div className="rounded-lg bg-[var(--color-ic-bg)] p-4 text-center md:p-[1.125rem]">
          <p className="font-mono leading-relaxed text-sm md:text-base">
            Like the monospace font in the code blocks?
          </p>
          <p className="font-mono leading-relaxed text-sm md:text-base">
            Check out{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.monolisa.dev/?ref=dominik"
              className="text-primary hover:underline"
            >
              monolisa.dev
            </a>
          </p>
        </div>

        <div id="querygg-referral" className="hidden">
          <QueryGG />
        </div>

        <a
          id="bytes-referral"
          href="https://bytes.dev/?r=dom"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src={withBasePath("/images/bytes.jpg")}
            alt="Bytes - the JavaScript Newsletter that doesn't suck"
            loading="lazy"
            className="w-full rounded-lg"
          />
        </a>
      </div>

      <div className="giscus" />
      <script>
        {`
          (() => {
            const giscusRoot = document.querySelector(".giscus");
            if (!giscusRoot) return;

            const getTheme = () =>
              document.documentElement.dataset.theme === "dark" ? "dark" : "light";
            const getThemeUrl = () => {
              const origin = window.location.origin;
              const giscusBasePath = ${JSON.stringify(basePath)};
              const mode = getTheme();
              const file = mode === "dark" ? "giscus-dark.css?v=9" : "giscus-light.css?v=9";
              return origin + giscusBasePath + "/" + file;
            };

            const updateReferral = () => {
              const path = window.location.pathname;
              const showQuery =
                path.includes("query") &&
                !path.includes("the-query-options-api") &&
                !path.includes("why-you-want");

              const queryEl = document.getElementById("querygg-referral");
              const bytesEl = document.getElementById("bytes-referral");
              if (!queryEl || !bytesEl) return;

              queryEl.classList.toggle("hidden", !showQuery);
              bytesEl.classList.toggle("hidden", showQuery);
            };

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
              script.setAttribute("data-theme", getThemeUrl());
              script.setAttribute("data-lang", "en");
              giscusRoot.appendChild(script);
            };

            const updateGiscusTheme = () => {
              const iframe = document.querySelector("iframe.giscus-frame");
              if (!iframe || !iframe.contentWindow) return;
              iframe.contentWindow.postMessage(
                { giscus: { setConfig: { theme: getThemeUrl() } } },
                "https://giscus.app"
              );
            };

            const onReady = () => {
              updateReferral();
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
