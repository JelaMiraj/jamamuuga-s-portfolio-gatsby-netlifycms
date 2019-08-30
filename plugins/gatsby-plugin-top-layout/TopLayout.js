import React from "react"
import {PropTypes} from "prop-types"
// import {Helmet} from "react-helmet"
import {
  createMuiTheme,
  CssBaseline,
  responsiveFontSizes,
} from "@material-ui/core"
import {red, pink} from "@material-ui/core/colors"
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/styles"
import styled, {ThemeProvider} from "styled-components/macro"
import {Helmet} from "../../src/components"
import {theme as myTheme} from "../../src/styles/themes"
// TODO: Avoid the need to wrap multiple providers.
// TODO: Convert website & local Gatsby plugin into a monorepo using Lerna & Yarn Workspaces to help guard against things like Yarn PnP issues.

// TODO: Use external theme instead.
// const myTheme = responsiveFontSizes(
//   createMuiTheme({
//     palette: {
//       primary: red,
//       secondary: pink,
//     },
//   }),
// )

export default function TopLayout(props) {
  return (
    <>
      <Helmet />
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={myTheme}>
          <ThemeProvider theme={myTheme}>
            <div>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {props.children}
            </div>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}
