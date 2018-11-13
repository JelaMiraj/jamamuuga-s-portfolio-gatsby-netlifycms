module.exports = {
  presets: [
    '@babel/preset-env',
    "@babel/preset-react",
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    // "babel-plugin-add-module-exports",
    "babel-plugin-styled-components",
  ],
}