module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    es6: true,
  },
  extends: [
    'eslint-config-with-prettier',
    'eslint-config-gatsby-standard',
  ],
  plugins: [
    'json',
  ],
}
