module.exports = {
  presets: [
    // If any presets need options, then require.resolve just package names individually instead of using map.
    // "regenerator-preset",
    "@babel/preset-env",
    "@babel/preset-react",
    "babel-preset-gatsby",
  ].map(require.resolve),
  plugins: [
    require.resolve("@babel/plugin-proposal-class-properties"),
    require.resolve("@babel/plugin-syntax-dynamic-import"),
    // [
    //   require.resolve("babel-plugin-named-params"),
    //   {
    //     options: true,
    //     caching: true,
    //   },
    // ],
    // require.resolve("babel-plugin-add-module-exports"),
    // [
    //   require.resolve("babel-plugin-transform-imports"),
    //   {
    //     lodash: {
    //       transform: "lodash/${member}",
    //       preventFullImport: true,
    //     },
    //     "@material-ui/core": {
    //       // transform: "@material-ui/core/esm/${member}",
    //       // for bundlers not supporting ES modules use:
    //       transform: "@material-ui/core/${member}",
    //       preventFullImport: true,
    //     },
    //     "@material-ui/icons": {
    //       // transform: "@material-ui/icons/esm/${member}",
    //       // for bundlers not supporting ES modules use:
    //       transform: "@material-ui/icons/${member}",
    //       preventFullImport: true,
    //     },
    //     "@material-ui/styles": {
    //       // transform: "@material-ui/styles/esm/${member}",
    //       // for bundlers not supporting ES modules use:
    //       transform: "@material-ui/styles/${member}",
    //       preventFullImport: true,
    //     },
    //     "@material-ui/system": {
    //       // transform: "@material-ui/system/esm/${member}",
    //       // for bundlers not supporting ES modules use:
    //       transform: "@material-ui/system/${member}",
    //       preventFullImport: true,
    //     },
    //   },
    // ],
    // require.resolve("babel-plugin-styled-components"),
  ],
}
