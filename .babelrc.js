module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', 'babel-preset-gatsby'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    // 'babel-plugin-add-module-exports',
    'babel-plugin-styled-components',
  ],
}
