module.exports = {
  presets: [
    // If any presets need options, then require.resolve just package names individually instead of using map.
    // "regenerator-preset",
    "@babel/preset-env",
    "@babel/preset-react",
    "babel-preset-gatsby",
  ].map(require.resolve),
  plugins: [
    require.resolve("babel-plugin-macros"),
    require.resolve("@babel/plugin-proposal-class-properties"),
    require.resolve("@babel/plugin-syntax-dynamic-import"),
    // [
    //   require.resolve("babel-plugin-named-params"),
    //   {
    //     options: true,
    //     caching: true,
    //   },
    // ],
    require.resolve("react-hot-loader/babel"),
    // require.resolve("babel-plugin-add-module-exports"),
    // [
    //   require.resolve("babel-plugin-import"),
    //   {
    //     libraryName: "lodash",
    //     libraryDirectory: "",
    //     camel2DashComponentName: false, // default: true
    //   },
    //   "babel-plugin-import-lodash",
    // ],
    // [
    //   require.resolve("babel-plugin-import"),
    //   {libraryName: "styled-components"},
    //   "babel-plugin-import-styled-components",
    // ],
    // [
    //   require.resolve("babel-plugin-import"),
    //   {
    //     libraryName: "@material-ui/core",
    //     libraryDirectory: "components", // default: lib
    //     camel2DashComponentName: false, // default: true
    //   },
    //   "babel-plugin-import-material-ui-core",
    // ],
    // [
    //   require.resolve("babel-plugin-import"),
    //   {
    //     libraryName: "@material-ui/styles",
    //     libraryDirectory: "components", // default: lib
    //     camel2DashComponentName: false, // default: true
    //   },
    //   "babel-plugin-import-material-ui-styles",
    // ],
    // [
    //   require.resolve("babel-plugin-import"),
    //   {
    //     libraryName: "@material-ui/icons",
    //     libraryDirectory: "components", // default: lib
    //     camel2DashComponentName: false, // default: true
    //   },
    //   "babel-plugin-import-material-ui-icons",
    // ],
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
    // [
    //   require.resolve("babel-plugin-transform-imports"),
    //   {
    //     lodash: {
    //       transform: "lodash/${member}",
    //       preventFullImport: true,
    //     },
    //   },
    //   "babel-plugin-transform-imports-material-ui-lodash",
    // ],
    // [
    //   require.resolve("babel-plugin-transform-imports"),
    //   {
    //     "@material-ui/core": {
    //       // transform: "@material-ui/core/esm/${member}",
    //       // for bundlers not supporting ES modules use:
    //       transform: "@material-ui/core/${member}",
    //       preventFullImport: true,
    //     },
    //   },
    //   "babel-plugin-transform-imports-material-ui-core",
    // ],
    // [
    //   require.resolve("babel-plugin-transform-imports"),
    //   {
    //     "@material-ui/icons": {
    //       // transform: "@material-ui/icons/esm/${member}",
    //       // for bundlers not supporting ES modules use:
    //       transform: "@material-ui/icons/${member}",
    //       preventFullImport: true,
    //     },
    //   },
    //   "babel-plugin-transform-imports-material-ui-icons",
    // ],
    // [
    //   require.resolve("babel-plugin-transform-imports"),
    //   {
    //     "@material-ui/styles": {
    //       // transform: "@material-ui/styles/esm/${member}",
    //       // for bundlers not supporting ES modules use:
    //       transform: "@material-ui/styles/${member}",
    //       preventFullImport: true,
    //     },
    //   },
    //   "babel-plugin-transform-imports-material-ui-styles",
    // ],
    // [
    //   require.resolve("babel-plugin-transform-imports"),
    //   {
    //     "@material-ui/system": {
    //       // transform: "@material-ui/system/esm/${member}",
    //       // for bundlers not supporting ES modules use:
    //       transform: "@material-ui/system/${member}",
    //       preventFullImport: true,
    //     },
    //   },
    //   "babel-plugin-transform-imports-material-ui-system",
    // ],
    // [
    //   require.resolve("babel-plugin-styled-components"),
    //   {
    //     pure: true,
    //   },
    // ],
  ],
}
