import type { Root } from "mdast";
import type { MdxJsxFlowElement } from "mdast-util-mdx-jsx";
import type { AsideType } from "./constants";
import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";
import { ASIDE_TYPES } from "./constants";

/**
 * The Gatsby content used code-fence info strings like `ts:title=foo`.
 * Normalize those to `lang=ts` and `meta=title=foo` so Astro's highlighter
 * can resolve the language correctly.
 */
export function remarkLegacyCodeFenceInfo() {
  return (tree: Root) => {
    visit(tree, "code", (node) => {
      if (typeof node.lang !== "string" || !node.lang.includes(":")) {
        return;
      }

      const [rawLang, ...rest] = node.lang.split(":");
      const lang = rawLang.trim() || "txt";
      const legacyMeta = rest.join(":").trim();

      node.lang = lang;
      if (legacyMeta) {
        node.meta = node.meta ? `${node.meta} ${legacyMeta}` : legacyMeta;
      }
    });
  };
}

export function remarkAsides() {
  return (tree: Root) => {
    visit(tree, (node, nodeIndex, parent) => {
      /**
       * Only accept asides with three ::: (containerDirective).
       * leafDirective and textDirective (: and ::) are not supported.
       */
      if (
        !parent ||
        nodeIndex === undefined ||
        node.type !== "containerDirective"
      ) {
        return;
      }

      /**
       * Check for the correct name, e.g. :::note
       */
      if (!ASIDE_TYPES.includes(node.name as AsideType)) return;

      const asideType = node.name as AsideType;
      let title: string = "";

      /**
       * Check if the aside has a custom title.
       * If it does, the children array will have a paragraph element with `directiveLabel` property as first item.
       * Extract the title there and remove the paragraph element from the children array.
       */
      const firstChild = node.children[0];
      if (
        firstChild?.type === "paragraph" &&
        firstChild.data &&
        "directiveLabel" in firstChild.data &&
        firstChild.children.length > 0
      ) {
        title = toString(firstChild.children).trim();

        node.children.splice(0, 1);
      }

      const attributes: MdxJsxFlowElement["attributes"] = [
        {
          type: "mdxJsxAttribute",
          name: "type",
          value: asideType,
        },
        {
          type: "mdxJsxAttribute",
          name: "title",
          value: title,
        },
      ];

      parent.children.splice(nodeIndex, 1, {
        type: "mdxJsxFlowElement",
        name: "Aside",
        attributes,
        children: node.children,
      });
    });
  };
}
