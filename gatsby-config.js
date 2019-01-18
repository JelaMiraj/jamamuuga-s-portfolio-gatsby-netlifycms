require("@babel/register")
const manifestConfig = require('./.manifest.config.js')

module.exports = {
  siteMetadata: {
    title: 'Gatsby + Netlify CMS Starter',
    description: 'This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        // modules: ['query-string'],
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        // TODO: Switch to Dart Sass from Node Sass when it works reliably without messing around.
        // implementation: require("sass"),
        // Explicitly include root style path just in case.
        includePaths: [
          // `${__dirname}/src/styles`,
          './src/styles',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sass-resources',
      options: {
        // TODO: Make sure filename uses actual expected root folder & filename based module style.
        // TODO: Find out which Scss module controls filename preferences here: gatsby-plugin-sass or sass-resources-loader.
        resources: [
          // `${__dirname}/src/styles/abstract/_variables.module.scss`,
          // TODO: Find out if this is a better way to resolve the folder path.
          // resolveFromRootDir('src/styles/abstract/_variables.module.scss'),
          './src/styles/abstracts/_variables.module.scss',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: manifestConfig,
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-purgecss', // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
