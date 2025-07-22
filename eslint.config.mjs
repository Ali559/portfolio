// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      // Your custom rules here
      "no-console": "error",
      "no-debugger": "error",
      "no-unused-vars": "error",
      "vue/no-unused-properties": "error",
      "vue/no-unused-components": "error",
      "vue/no-unused-vars": "error",
      "vue/html-self-closing": "off",
    },
  },
);
