module.exports = {
  presets: [require.resolve(`@babel/preset-env`), require.resolve(`@babel/preset-react`), require.resolve(`babel-preset-gatsby`)],
  plugins: [
    require.resolve(`@babel/plugin-proposal-class-properties`),
    require.resolve(`@babel/plugin-syntax-dynamic-import`),
    // [
    //   "named-params",
    //   {
    //     options: true,
    //     caching: true,
    //   },
    // ],
    // "add-module-exports",
    // "styled-components",
    // require.resolve(`babel-plugin-add-module-exports`),
    require.resolve(`babel-plugin-styled-components`),
  ],
}
