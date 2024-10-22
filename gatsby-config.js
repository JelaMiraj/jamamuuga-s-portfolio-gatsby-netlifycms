// require("@babel/register")
const proxy = require("http-proxy-middleware")
// const manifestConfig = require("./.manifest.config.js")

module.exports = {
  // __experimentalThemes: [`gatsby-theme-material-ui`],
  siteMetadata: {
    title: "Jason Cady Designs Portfolio",
    description:
      "Jason Cady's Portfolio Website. Based mostly on Gatsby Starter Netlify CMS & Gatsby Material UI Business Starter.",
    contact: {
      // NOTE: Always play it safe...
      // TODO: Maybe just link to LinkedIn.
      phone: "Phone Number",
      email: "Email Address",
    },
    menuLinks: [
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Portfolio",
        link: "/portfolio",
      },
      // {
      //   name: "Blog",
      //   link: "/blog",
      // },
      {
        name: "Contact",
        link: "/contact",
      },
      // {
      //   name: "Form Examples",
      //   link: "/contact/examples",
      // },
    ],
  },
  plugins: [
    // {
    //   resolve: "gatsby-plugin-import",
    //   options: {
    //     libraryName: "lodash",
    //     libraryDirectory: "",
    //     camel2DashComponentName: false, // default: true
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-import",
    //   options: {
    //     libraryName: "styled-components",
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-import",
    //   options: {
    //     libraryName: "@material-ui/core",
    //     libraryDirectory: "components", // default: lib
    //     camel2DashComponentName: false, // default: true
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-import",
    //   options: {
    //     libraryName: "@material-ui/styles",
    //     libraryDirectory: "components", // default: lib
    //     camel2DashComponentName: false, // default: true
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-import",
    //   options: {
    //     libraryName: "@material-ui/icons",
    //     libraryDirectory: "components", // default: lib
    //     camel2DashComponentName: false, // default: true
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-transform-imports",
    //   options: {
    //     lodash: {
    //       transform: "lodash/${member}",
    //       preventFullImport: true,
    //     },
    //     // "material-ui": {
    //     //   transform: "material-ui/${member}",
    //     //   preventFullImport: true,
    //     // },
    //     "@material-ui/core": {
    //       // Use "transform: '@material-ui/core/${member}'," if your bundler does not support ES modules
    //       transform: "@material-ui/core/esm/${member}",
    //       preventFullImport: true,
    //     },
    //     "@material-ui/styles": {
    //       // Use "transform: '@material-ui/styles/${member}'," if your bundler does not support ES modules
    //       transform: "@material-ui/styles/esm/${member}",
    //       preventFullImport: true,
    //     },
    //     "@material-ui/icons": {
    //       // Use "transform: '@material-ui/icons/${member}'," if your bundler does not support ES modules
    //       transform: "@material-ui/icons/esm/${member}",
    //       preventFullImport: true,
    //     },
    //   },
    // },
    "gatsby-theme-material-ui",
    {
      resolve: "gatsby-theme-netlify-cms",
      options: {
        // ...
      },
    },
    // "gatsby-plugin-top-layout",
    {
      resolve: "gatsby-plugin-compile-es6-packages",
      options: {
        // modules: ["query-string"],
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        // Add any options here
        pure: true,
        transpileTemplateLiterals: true,
      },
    },
    "gatsby-plugin-react-helmet",
    // {
    //   resolve: "gatsby-plugin-sass",
    //   options: {
    //     // TODO: Switch to Dart Sass from Node Sass when it works reliably without messing around.
    //     // implementation: require("sass"),
    //     // Explicitly include root style path just in case.
    //     includePaths: [
    //       // `${__dirname}/src/styles`,
    //       "./src/styles",
    //     ],
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-sass-resources",
    //   options: {
    //     // TODO: Make sure filename uses actual expected root folder & filename based module style.
    //     // TODO: Find out which Scss module controls filename preferences here: gatsby-plugin-sass or sass-resources-loader.
    //     resources: [
    //       // `${__dirname}/src/styles/abstract/_variables.module.scss`,
    //       // TODO: Find out if this is a better way to resolve the folder path.
    //       // resolveFromRootDir("src/styles/abstract/_variables.module.scss"),
    //       "./src/styles/abstracts/_variables.module.scss",
    //     ],
    //   },
    // },
    {
      resolve: "gatsby-plugin-manifest",
      // options: manifestConfig,
      options: {
        name: "Jason Cady Portfolio",
        short_name: "Jason Cady Portfolio",
        start_url: "/",
        // background_color: colors.background,
        // FIXME: Go back to DRY when sane. Currently repeating theme color variables here to avoid import issues & extra dependencies. Specifically, @babel/register has cache resolve failure issues on Netlify platform.
        // TODO: Make Sure these theme color is not messing up Material UI Theme colors.
        background_color: "#D64000",
        // theme_color: colors.primary,
        theme_color: "white",
        // FIXME: change this off pink when Material UI Theme Colors start working.
        // theme_color: "pink",
        // theme_color: "orange",
        display: "browser",
        // TODO: Use icon with equal-sided image borders because chrome dev console complains if it is not.
        // icon: "src/images/logo.svg",
        icon: "static/images/favicon-32x32.png",
        // TODO: Below line is not needed when switched to a equal sided SVG icon.
        // sizes: "48x11 72x16 96x21 144x32 192x42 256x56 384x85 512x113",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto:300,400,500,700"],
          // families: ["Roboto"],
          // families: ["Roboto", "Roboto:bold"],
        },
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/images`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        // NOTE: MozJpeg take significantly longer than the default, but gives better optimized results.
        useMozJpeg: true,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
              withWebp: true,
              tracedSVG: true,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    // {
    //   resolve: "gatsby-plugin-material-ui",
    //   options: {
    //     // If you want to use styled components you should change the injection order.
    //     stylesProvider: {
    //       injectFirst: true,
    //     },
    //     // theme: {
    //     //   primaryColor: "#9c27b0",
    //     // },
    //     pathToTheme: "src/gatsby-theme-material-ui-top-layout/theme.js",
    //   },
    // },
    "gatsby-plugin-offline",
    // {
    //   resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
    //   options: {
    //     develop: true, // Activates purging in npm run develop
    //     // FIXME: I doubt this works right in our multiple file setup. There is no more all.scss. The "bulma css file" is supposed to get purging.
    //     purgeOnly: ["/vendor/vendor.scss"], // applies purging only on the bulma css file
    //   },
    // },
    // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  // developMiddleware: app => {
  //   app.use(
  //     "/.netlify/functions/",
  //     proxy({
  //       target: "http://localhost:9000",
  //       pathRewrite: {
  //         "/.netlify/functions/": "",
  //       },
  //     }),
  //   )
  // },
}
