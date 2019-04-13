module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      // {
      //   development: process.env.BABEL_ENV === "development",
      // },
    ],
    "babel-preset-gatsby",
  ],
  plugins: [
    "@babel/plugin-proposal-decorators",
    "@babel/plugin-proposal-class-properties",
    "babel-plugin-root-import",
    "babel-plugin-transform-imports",
    "@babel/plugin-syntax-dynamic-import",
    [
      "named-params",
      {
        options: true,
        caching: true,
      },
    ],
    // "add-module-exports",
    "styled-components",
  ],
}
