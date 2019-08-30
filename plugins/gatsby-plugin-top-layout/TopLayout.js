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
import styled, {ThemeProvider} from "styled-components"
import {Helmet} from "../../src/components"
// import {theme as myTheme} from "../../src/styles/themes"
// TODO: Avoid the need to wrap multiple providers.

// TODO: Use external theme instead.
const myTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: red,
      secondary: pink,
    },
  }),
)

export default function TopLayout({children}) {
  return (
    <>
      <Helmet />
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={myTheme}>
          <ThemeProvider theme={myTheme}>
            <div>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {children}
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
