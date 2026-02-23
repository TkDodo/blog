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
