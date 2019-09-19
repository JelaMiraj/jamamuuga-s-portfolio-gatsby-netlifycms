module.exports = {
  processors: ["stylelint-processor-styled-components"],
  extends: [
    // TODO: Maybe use regular recommended with Styled Components.
    // "stylelint-config-recommended",
    // "stylelint-config-recommended-scss",
    "stylelint-config-standard-scss",
    "stylelint-config-prettier",
    "stylelint-config-styled-components",
    // "@acollier/stylelint-config-scss",
    // NOTE: stylelint-config-airbnb removed because of unfixed security advisories of dependencies.
    // "stylelint-config-airbnb",
    // "stylelint-config-idiomatic-sass",
    // "@giotramu/stylelint-config",
  ],
  plugins: ["stylelint-prettier"],
  rules: {
    "prettier/prettier": true,
  },
}
