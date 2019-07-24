module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
  },
  env: {
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "eslint-config-gatsby-standard",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    "eslint-config-with-prettier",
  ],
  plugins: ["json", "react-hooks"],
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
    quotes: [
      "error",
      "double",
      {avoidEscape: true, allowTemplateLiterals: true},
    ],
    semi: ["error", "never", {beforeStatementContinuationChars: "never"}],
    // Begin: React Hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    // End: React Hooks
  },
}
