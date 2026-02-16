import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { defineEcConfig } from "astro-expressive-code";

export default defineEcConfig({
  themes: ['night-owl', 'night-owl-light'],
  useDarkModeMediaQuery: false,
  themeCssSelector: (theme) => `[data-theme='${theme.type}']`,
  plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
  removeUnusedThemes: true,
  defaultProps: {
    showLineNumbers: false,
    collapseStyle: "collapsible-auto",
  },
  styleOverrides: {
    frames: {
      shadowColor: "none",
    },
  },
});
