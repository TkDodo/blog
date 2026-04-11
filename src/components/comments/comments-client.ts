import { parseBlueskyPostUrl } from "./bluesky-url";

interface GiscusConfig {
  repo: string;
  repoId: string;
  category: string;
  categoryId: string;
}

interface CommentsRootElements {
  tabList: HTMLElement;
  githubTab: HTMLButtonElement;
  blueskyTab: HTMLButtonElement | null;
  githubPanel: HTMLElement;
  blueskyPanel: HTMLElement | null;
  blueskyMount: HTMLElement | null;
  giscusRoot: HTMLElement;
}

const COMMENTS_TAB_PREFERENCE_KEY = "tkdodo-comments-tab-preference";

function readTabPreference(): "github" | "bluesky" | null {
  try {
    const value = window.localStorage.getItem(COMMENTS_TAB_PREFERENCE_KEY);
    return value === "github" || value === "bluesky" ? value : null;
  } catch {
    return null;
  }
}

function writeTabPreference(tab: "github" | "bluesky") {
  try {
    window.localStorage.setItem(COMMENTS_TAB_PREFERENCE_KEY, tab);
  } catch {
    // Ignore storage failures (private mode / blocked storage).
  }
}

function runWhenIdle(callback: () => void) {
  const requestIdle = (
    globalThis as typeof globalThis & {
      requestIdleCallback?: (
        cb: () => void,
        options?: { timeout: number },
      ) => number;
    }
  ).requestIdleCallback;

  if (requestIdle) {
    requestIdle(callback, { timeout: 1500 });
    return;
  }

  globalThis.setTimeout(callback, 120);
}

function getTheme(): "light" | "dark" {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getThemeUrl(baseUrl: string): string {
  const origin = window.location.origin;
  const giscusBasePath = (baseUrl || "/").replace(/\/$/, "");
  const mode = getTheme();
  const file =
    mode === "dark" ? "giscus-dark.css?v=10" : "giscus-light.css?v=10";
  return `${origin + giscusBasePath}/${file}`;
}

function updateReferral() {
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
}

function injectGiscus(
  giscusRoot: HTMLElement,
  config: GiscusConfig,
  baseUrl: string,
) {
  if (giscusRoot.querySelector("script[data-giscus-script='1']")) return;
  const script = document.createElement("script");
  script.src = "https://giscus.app/client.js";
  script.async = true;
  script.crossOrigin = "anonymous";
  script.setAttribute("data-giscus-script", "1");
  script.setAttribute("data-repo", config.repo);
  script.setAttribute("data-repo-id", config.repoId);
  script.setAttribute("data-category", config.category);
  script.setAttribute("data-category-id", config.categoryId);
  script.setAttribute("data-mapping", "pathname");
  script.setAttribute("data-strict", "0");
  script.setAttribute("data-reactions-enabled", "1");
  script.setAttribute("data-emit-metadata", "0");
  script.setAttribute("data-input-position", "top");
  script.setAttribute("data-theme", getThemeUrl(baseUrl));
  script.setAttribute("data-lang", "en");
  giscusRoot.appendChild(script);
}

function updateGiscusTheme(baseUrl: string) {
  const iframe = document.querySelector<HTMLIFrameElement>(
    "iframe.giscus-frame",
  );
  if (!iframe || !iframe.contentWindow) return;
  iframe.contentWindow.postMessage(
    { giscus: { setConfig: { theme: getThemeUrl(baseUrl) } } },
    "https://giscus.app",
  );
}

function setTabState(
  elements: CommentsRootElements,
  tab: "github" | "bluesky",
) {
  const tabs = [elements.githubTab, elements.blueskyTab].filter(
    Boolean,
  ) as HTMLButtonElement[];
  const panels = [elements.githubPanel, elements.blueskyPanel].filter(
    Boolean,
  ) as HTMLElement[];

  for (const tabEl of tabs) {
    const selected = tabEl.dataset.commentsTab === tab;
    tabEl.setAttribute("aria-selected", String(selected));
    tabEl.tabIndex = selected ? 0 : -1;
  }

  for (const panel of panels) {
    panel.hidden = panel.dataset.commentsPanel !== tab;
  }
}

function hideBluesky(elements: CommentsRootElements) {
  if (elements.blueskyTab) {
    elements.blueskyTab.hidden = true;
  }
  if (elements.blueskyPanel) {
    elements.blueskyPanel.hidden = true;
  }
}

function getRootElements(root: HTMLElement): CommentsRootElements | null {
  const tabList = root.querySelector<HTMLElement>("[role='tablist']");
  const githubTab = root.querySelector<HTMLButtonElement>(
    "[data-comments-tab='github']",
  );
  const githubPanel = root.querySelector<HTMLElement>(
    "[data-comments-panel='github']",
  );
  const giscusRoot = root.querySelector<HTMLElement>(".giscus");

  if (!tabList || !githubTab || !githubPanel || !giscusRoot) {
    return null;
  }

  return {
    tabList,
    githubTab,
    blueskyTab: root.querySelector<HTMLButtonElement>(
      "[data-comments-tab='bluesky']",
    ),
    githubPanel,
    blueskyPanel: root.querySelector<HTMLElement>(
      "[data-comments-panel='bluesky']",
    ),
    blueskyMount: root.querySelector<HTMLElement>("[data-bluesky-mount]"),
    giscusRoot,
  };
}

async function initRoot(root: HTMLElement) {
  if (root.dataset.commentsInit === "1") return;
  root.dataset.commentsInit = "1";

  const elements = getRootElements(root);
  if (!elements) return;

  const config: GiscusConfig = {
    repo: root.dataset.commentsRepo ?? "",
    repoId: root.dataset.commentsRepoId ?? "",
    category: root.dataset.commentsCategory ?? "",
    categoryId: root.dataset.commentsCategoryId ?? "",
  };
  const baseUrl = root.dataset.commentsBaseUrl ?? "/";

  updateReferral();
  injectGiscus(elements.giscusRoot, config, baseUrl);
  updateGiscusTheme(baseUrl);

  const giscusObserver = new MutationObserver(() => {
    updateGiscusTheme(baseUrl);
  });
  giscusObserver.observe(elements.giscusRoot, {
    childList: true,
    subtree: true,
  });

  const themeObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "data-theme"
      ) {
        updateGiscusTheme(baseUrl);
      }
    }
  });

  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  const blueskyUrl =
    document
      .querySelector<HTMLMetaElement>("meta[name='x-tkdodo-post-bluesky']")
      ?.content?.trim() ?? "";
  const hasPotentialBluesky =
    Boolean(blueskyUrl) && Boolean(parseBlueskyPostUrl(blueskyUrl));

  if (
    !hasPotentialBluesky ||
    !elements.blueskyTab ||
    !elements.blueskyPanel ||
    !elements.blueskyMount
  ) {
    hideBluesky(elements);
    setTabState(elements, "github");
    return;
  }

  let blueskyLoaded = false;
  let blueskyLoading = false;

  const loadBluesky = async () => {
    if (blueskyLoaded || blueskyLoading) return;

    blueskyLoading = true;
    try {
      const module = await import("./bluesky-client");
      await module.mountBlueskyComments(elements.blueskyMount as HTMLElement, {
        postUrl: blueskyUrl,
        onUnavailable: () => {
          hideBluesky(elements);
          setTabState(elements, "github");
        },
      });
      blueskyLoaded = true;
    } catch {
      hideBluesky(elements);
      setTabState(elements, "github");
    } finally {
      blueskyLoading = false;
    }
  };

  const activateTab = async (
    tab: "github" | "bluesky",
    options?: { persist?: boolean; deferBlueskyLoad?: boolean },
  ) => {
    setTabState(elements, tab);
    if (options?.persist) {
      writeTabPreference(tab);
    }
    if (tab === "bluesky") {
      if (options?.deferBlueskyLoad) {
        runWhenIdle(() => {
          void loadBluesky();
        });
        return;
      }
      await loadBluesky();
    }
  };

  const getVisibleTabs = () =>
    [elements.githubTab, elements.blueskyTab].filter(
      (tab): tab is HTMLButtonElement => Boolean(tab && !tab.hidden),
    );

  elements.githubTab.addEventListener("click", () => {
    void activateTab("github", { persist: true });
  });
  elements.blueskyTab.addEventListener("click", () => {
    void activateTab("bluesky", { persist: true });
  });

  elements.tabList.addEventListener("keydown", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) return;
    if (target.getAttribute("role") !== "tab") return;

    const visibleTabs = getVisibleTabs();
    const currentIndex = visibleTabs.indexOf(target);
    if (currentIndex === -1) return;

    const moveToIndex = async (index: number) => {
      const nextTab = visibleTabs[index];
      if (!nextTab) return;
      nextTab.focus();
      const tabName =
        nextTab.dataset.commentsTab === "bluesky" ? "bluesky" : "github";
      await activateTab(tabName, { persist: true });
    };

    if (event.key === "ArrowRight") {
      event.preventDefault();
      const nextIndex = (currentIndex + 1) % visibleTabs.length;
      void moveToIndex(nextIndex);
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      const nextIndex =
        (currentIndex - 1 + visibleTabs.length) % visibleTabs.length;
      void moveToIndex(nextIndex);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      void moveToIndex(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      void moveToIndex(visibleTabs.length - 1);
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const tabName =
        target.dataset.commentsTab === "bluesky" ? "bluesky" : "github";
      void activateTab(tabName, { persist: true });
    }
  });

  const preferredTab = readTabPreference();
  if (preferredTab === "bluesky") {
    void activateTab("bluesky", { deferBlueskyLoad: true });
  } else {
    setTabState(elements, "github");
  }
}

function initAllRoots() {
  const roots = document.querySelectorAll<HTMLElement>("[data-comments-root]");
  for (const root of roots) {
    void initRoot(root);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAllRoots, { once: true });
} else {
  initAllRoots();
}

document.addEventListener("astro:page-load", initAllRoots);
