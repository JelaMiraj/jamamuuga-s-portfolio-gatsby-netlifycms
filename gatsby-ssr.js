// See https://github.com/mui-org/material-ui/tree/master/examples/gatsby
// /* no-op eslint-disable react/no-danger */

// const React = require("react")
// const {renderToString} = require("react-dom/server")
// const StylesProvider = require("@material-ui/core/styles/StylesProvider").default
// const getPageContext = require("./src/tools/getPageContext").default

// function replaceRenderer({
//   bodyComponent,
//   replaceBodyHTMLString,
//   setHeadComponents,
// }) {
//   // Get the context of the page to collected side effects.
//   const muiPageContext = getPageContext()

//   const bodyHTML = renderToString(
//     <StylesProvider sheetsRegistry={muiPageContext.sheetsRegistry}>
//       {bodyComponent}
//     </StylesProvider>,
//   )

//   replaceBodyHTMLString(bodyHTML)
//   setHeadComponents([
//     <style
//       type="text/css"
//       id="jss-server-side"
//       key="jss-server-side"
//       dangerouslySetInnerHTML={{
//         __html: muiPageContext.sheetsRegistry.toString(),
//       }}
//     />,
//   ])
// }

// exports.replaceRenderer = replaceRenderer

// // It's not ready yet: https://github.com/gatsbyjs/gatsby/issues/8237.

// const withRoot = require("./src/tools/withRoot").default

// const WithRoot = withRoot(props => props.children)

// exports.wrapRootElement = ({element}) => <WithRoot>{element}</WithRoot>
