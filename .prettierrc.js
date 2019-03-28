module.exports = {
  semi: false,
  singleQuote: true,
  // trailingComma: 'es5',
  trailingComma: 'all',
  // bracketSpacing: false,
  overrides: [
    {
      // Add any es5 config files here to avoid breaking on es6 more trailing commas.
      files: 'gatsby-*.js',
      options: {
        trailingComma: 'es5',
      },
    },
  ],
}
