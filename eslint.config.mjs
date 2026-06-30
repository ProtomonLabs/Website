import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import react from "eslint-plugin-react";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,

  // React rules only for .tsx files
  {
    files: ["**/*.tsx"],
    ...react.configs.flat.recommended,
    settings: { react: { version: "detect" } },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/no-unknown-property": "off",
      "react/no-unescaped-entities": "off",
    },
  },

  {
    ignores: [
      "dist/",
      ".astro/",
      "node_modules/",
      "public/",
      "*.config.mjs",
      "tailwind.config.mjs",
    ],
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "astro/no-set-html-directive": "off",
    },
  },
];