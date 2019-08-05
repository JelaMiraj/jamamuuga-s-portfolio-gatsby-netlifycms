module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "babel-preset-gatsby",
  ], // .map(require.resolve),
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
    // "babel-plugin-add-module-exports",
    [
      "babel-plugin-transform-imports",
      {
        lodash: {
          transform: "lodash/${member}",
          preventFullImport: true,
        },
        "@material-ui/core": {
          // transform: "@material-ui/core/esm/${member}",
          // for bundlers not supporting ES modules use:
          transform: "@material-ui/core/${member}",
          preventFullImport: true,
        },
        "@material-ui/icons": {
          // transform: "@material-ui/icons/esm/${member}",
          // for bundlers not supporting ES modules use:
          transform: "@material-ui/icons/${member}",
          preventFullImport: true,
        },
        "@material-ui/styles": {
          // transform: "@material-ui/styles/esm/${member}",
          // for bundlers not supporting ES modules use:
          transform: "@material-ui/styles/${member}",
          preventFullImport: true,
        },
        "@material-ui/system": {
          // transform: "@material-ui/system/esm/${member}",
          // for bundlers not supporting ES modules use:
          transform: "@material-ui/system/${member}",
          preventFullImport: true,
        },
      },
    ],
    "babel-plugin-styled-components",
  ], // .map(require.resolve),
}
