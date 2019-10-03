// import React from "react"
// import {PropTypes} from "prop-types"
// // import {Helmet} from "react-helmet"
// import {
//   Box,
//   CssBaseline,
// } from "@material-ui/core"
// // import {
// //   createMuiTheme,
// //   responsiveFontSizes,
// // } from "@material-ui/core/styles"
// // import {red, pink} from "@material-ui/core/colors"
// import {
//   StylesProvider,
//   ThemeProvider,
// } from "@material-ui/styles"
// import styled, {ThemeProvider as StyledThemeProvider} from "styled-components/macro"
// import {Helmet} from "../../src/components"
// // import {theme as myTheme} from "../../src/styles/themes"
// import theme as myTheme from "../../src/gatsby-plugin-material-ui/theme"
// // TODO: Avoid the need to wrap multiple providers.
// // TODO: Convert website & local Gatsby plugin into a monorepo using Lerna & Yarn Workspaces to help guard against things like Yarn PnP issues.

// // TODO: Use external theme instead.
// // const myTheme = responsiveFontSizes(
// //   createMuiTheme({
// //     palette: {
// //       primary: {
// //         main: "#f44335",
// //         contrastText: "#212121",
// //       },
// //       secondary: {main: "#FF4081"},
// //     },
// //   }),
// // )

// export default function TopLayout(props) {
//   return (
//     <>
//       <Helmet />
//       <StylesProvider injectFirst>
//         <ThemeProvider theme={myTheme}>
//           <StyledThemeProvider theme={myTheme}>
//             <Box
//               color="primary.main"
//               bgcolor="background.paper"
//               fontFamily="h6.fontFamily"
//               fontSize={{
//                 xs: "h6.fontSize",
//                 sm: "h4.fontSize",
//                 md: "h3.fontSize",
//               }}
//               p={{xs: 2, sm: 3, md: 4}}
//             >
//               {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//               <CssBaseline />
//               {props.children}
//             </Box>
//           </StyledThemeProvider>
//         </ThemeProvider>
//       </StylesProvider>
//     </>
//   )
// }

// TopLayout.propTypes = {
//   children: PropTypes.node,
// }
