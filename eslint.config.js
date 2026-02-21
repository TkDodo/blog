import antfu from "@antfu/eslint-config";
import eslintConfigPrettier from "eslint-config-prettier";

export default antfu({
    stylistic: false,
    formatters: false,
    astro: true,
    typescript: true,
    rules: {
      "node/prefer-global/process": "off",
    },
  })
  .append(eslintConfigPrettier)
  .append({
    ignores: ["public/sw.js"],
  });
