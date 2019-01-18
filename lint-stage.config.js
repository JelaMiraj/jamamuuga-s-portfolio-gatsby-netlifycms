module.exports = {
  linters: {
    '*.{js,jsx}': [
      'yarn run lint:staged',
      'git add',
    ],
    '*.{html,md,mdx,yaml,json,css,scss,less}': [
      'prettier --write',
      'git add',
    ],
    '*.{png,jpeg,jpg,gif,svg}': [
      'imagemin-lint-staged',
      'git add',
    ],
  },
}
