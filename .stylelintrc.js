module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    // 'stylelint-config-recommended-scss',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
    'stylelint-config-styled-components',
    // '@acollier/stylelint-config-scss',
    // NOTE: stylelint-config-airbnb removed because of unfixed security advisories of dependencies.
    // 'stylelint-config-airbnb',
    // 'stylelint-config-idiomatic-sass',
    // 'stylelint-config-pack',
  ],
}
