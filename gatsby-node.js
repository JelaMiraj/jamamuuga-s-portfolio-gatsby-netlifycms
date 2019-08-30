const _ = require("lodash")
const path = require("path")
const {createFilePath} = require("gatsby-source-filesystem")
const {fmImagesToRelative} = require("gatsby-remark-relative-images")
const PnpWebpackPlugin = require("pnp-webpack-plugin")
// const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer")

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions

  return graphql(`
    {
      allMarkdownRemark(
        sort: {fields: [frontmatter___date], order: DESC}
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              title
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))

      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const {id} = edge.node
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`,
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode})
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateWebpackConfig = ({stage, rules, loaders, plugins, actions}) => {
  actions.setWebpackConfig({
    resolveLoader: {
      plugins: [PnpWebpackPlugin.moduleLoader(module)],
    },
    resolve: {
      plugins: [
        PnpWebpackPlugin.bind(`${__dirname}/.cache`, module, `gatsby`),
        PnpWebpackPlugin.bind(`${__dirname}/public`, module, `gatsby`),
        PnpWebpackPlugin,
      ],
    },
    module: {
      rules: [
        {
          test: /\.runtime(\.module)?\.scss$/,
          use: [
            // We don't need to add the matching ExtractText plugin
            // because gatsby already includes it and makes sure its only
            // run at the appropriate stages, e.g. not in development
            loaders.miniCssExtract(),
            loaders.css({importLoaders: 1}),
            // the postcss loader comes with some nice defaults
            // including autoprefixer for our configured browsers
            loaders.postcss(),
            // In theory it might only need this one & the rest can be commented out.
            {
              loader: "sass-extract-loader",
              options: {
                includePaths: "./src/styles",
                plugins: ["sass-extract-js"],
              },
            },
          ],
        },
        // {
        //   test: /\.js$/,
        //   loader: require.resolve('babel-loader'),
        // },
        // {
        //   // TODO: Maybe remove explicit TypeScript loader.
        //   // In case there are any ts sub dependencies that attempt to recompile their TypeScript.
        //   test: /\.ts$/,
        //   loader: require.resolve('ts-loader'),
        //   options: PnpWebpackPlugin.tsLoaderOptions({
        //     // ... regular options go there ...
        //   }),
        // },
      ],
    },
    plugins: [
      // plugins.define({
      //   __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
      // }),
      // new BundleAnalyzerPlugin({
      //   // FIXME: Even disabled, Wepback Bundle Analyzer still generates for serving stats.json & sw.js in production...
      //   analyzerMode: "disabled",
      //   generateStatsFile: true,
      //   openAnalyzer: false,
      //   statsOptions: {source: false},
      // }),
    ],
  })
}
