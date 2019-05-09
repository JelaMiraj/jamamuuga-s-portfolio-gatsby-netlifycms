module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react", "babel-preset-gatsby"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    // [
    //   "named-params",
    //   {
    //     options: true,
    //     caching: true,
    //   },
    // ],
    // "add-module-exports",
    // "styled-components",
    // "babel-plugin-add-module-exports",
    "babel-plugin-styled-components",
  ],
}
