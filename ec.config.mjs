import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { pluginFileIcons } from "@xt0rted/expressive-code-file-icons";
import { defineEcConfig } from "astro-expressive-code";
import ecTwoSlash from "expressive-code-twoslash";

const twoslashTrimTrailingEmptyLine = {
  name: "twoslash-trim-trailing-empty-line",
  hooks: {
    preprocessCode({ codeBlock }) {
      if (!/\btwoslash\b/.test(codeBlock.meta)) {
        return;
      }

      const lines = codeBlock.getLines();
      let index = lines.length - 1;

      // Twoslash can leave a trailing empty line where `// ^?` used to be.
      while (index >= 0 && codeBlock.getLine(index)?.text.trim() === "") {
        codeBlock.deleteLine(index);
        index -= 1;
      }
    },
  },
};

const defaultFileIconByLanguage = {
  ts: "typescript",
  tsx: "reactts",
  jsx: "reactjs",
};

const mapLanguageToFileIcon = {
  name: "map-language-to-file-icon",
  hooks: {
    preprocessMetadata({ codeBlock }) {
      const explicitIcon = codeBlock.metaOptions.getString("icon");
      if (explicitIcon || codeBlock.props.icon) {
        return;
      }

      const mappedIcon =
        defaultFileIconByLanguage[codeBlock.language.toLowerCase()];

      if (mappedIcon) {
        codeBlock.props.icon = mappedIcon;
      }
    },
  },
};

const codeBlockSlugCountsByDoc = new Map();

const slugifyCodeId = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getClassNames = (node) => {
  const value = node?.properties?.className ?? node?.properties?.class;
  if (Array.isArray(value)) return value;
  if (typeof value === "string") return value.split(/\s+/);
  return [];
};

const hasClass = (node, className) => getClassNames(node).includes(className);

const getTagName = (node) => node?.tagName ?? node?.name ?? "";

const findChild = (node, tagName, className) => {
  for (const child of node?.children ?? []) {
    if (child?.type !== "element" || getTagName(child) !== tagName) continue;
    if (!className || hasClass(child, className)) return child;
  }
  return null;
};

const addCodeBlockAnchors = {
  name: "add-code-block-anchors",
  hooks: {
    postprocessRenderedBlock({ codeBlock, renderData }) {
      const title = codeBlock.metaOptions.getString("title");
      if (!title?.trim()) return;

      const docKey =
        codeBlock.parentDocument?.sourceFilePath ?? "__unknown_document__";
      if (!codeBlockSlugCountsByDoc.has(docKey)) {
        codeBlockSlugCountsByDoc.set(docKey, new Map());
      }
      const slugCounts = codeBlockSlugCountsByDoc.get(docKey);

      const baseSlug = slugifyCodeId(title) || "code";
      const count = (slugCounts.get(baseSlug) ?? 0) + 1;
      slugCounts.set(baseSlug, count);
      const id = count === 1 ? baseSlug : `${baseSlug}-${count}`;

      renderData.blockAst.properties ??= {};
      renderData.blockAst.properties.id = id;

      const figure =
        renderData.blockAst?.type === "element" &&
        getTagName(renderData.blockAst) === "figure" &&
        hasClass(renderData.blockAst, "frame")
          ? renderData.blockAst
          : findChild(renderData.blockAst, "figure", "frame");
      const header = figure && findChild(figure, "figcaption", "header");
      const titleNode = header && findChild(header, "span", "title");
      if (!titleNode) return;

      const hasAnchor = (titleNode.children ?? []).some(
        (child) =>
          child?.type === "element" &&
          child.tagName === "a" &&
          hasClass(child, "code-anchor"),
      );
      if (hasAnchor) return;

      titleNode.children ??= [];
      titleNode.children.push({
        type: "element",
        tagName: "a",
        properties: {
          href: `#${id}`,
          ariaLabel: `Permalink: ${title}`,
          className: ["code-anchor"],
        },
        children: [
          {
            type: "element",
            tagName: "svg",
            properties: {
              className: ["anchor-icon"],
              viewBox: "0 0 16 16",
              ariaHidden: "true",
            },
            children: [
              {
                type: "element",
                tagName: "path",
                properties: {
                  d: "m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z",
                },
                children: [],
              },
            ],
          },
        ],
      });
    },
  },
};

export default defineEcConfig({
  themes: ["night-owl", "night-owl-light"],
  useDarkModeMediaQuery: false,
  themeCssSelector: (theme) => `[data-theme='${theme.type}']`,
  plugins: [
    pluginCollapsibleSections(),
    pluginLineNumbers(),
    mapLanguageToFileIcon,
    pluginFileIcons({
      iconClass: "inline-block size-5 shrink-0 mr-2 -mt-[2px]",
      titleClass: "inline-flex flex-row items-center gap-1",
    }),
    addCodeBlockAnchors,
    ecTwoSlash({
      includeJsDoc: false,
      twoslashOptions: {
        handbookOptions: {
          // noStaticSemanticInfo: true,
        },
        compilerOptions: {
          lib: ["lib.es2022.d.ts", "lib.dom.d.ts", "lib.dom.iterable.d.ts"],
        },
      },
    }),
    twoslashTrimTrailingEmptyLine,
  ],
  removeUnusedThemes: true,
  defaultProps: {
    showLineNumbers: true,
    collapseStyle: "collapsible-auto",
  },
  styleOverrides: {
    frames: {
      shadowColor: "none",
    },
  },
});
