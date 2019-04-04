module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
  },
  env: {
    es6: true,
  },
  extends: ["eslint-config-with-prettier", "eslint-config-gatsby-standard"],
  plugins: ["json"],
  rules: {
    // "func-names": [
    //   "error",
    //   "never",
    // ],
    indent: ["error", 2],
    // // Uncomment this if related styled components or other css-in-js stuff causes linting errors.
    // "no-unused-expressions": ["error", { allowTaggedTemplates: true }],
    // Object curly spacing setting here since neither eslint-config-with-prettier, nor Prettier VSCode extension handles this properly.
    "object-curly-spacing": ["error", "never"],
    quotes: "double",
  },
}
