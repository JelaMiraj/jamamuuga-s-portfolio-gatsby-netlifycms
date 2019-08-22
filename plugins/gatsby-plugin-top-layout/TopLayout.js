import React from "react"
import {PropTypes} from "prop-types"
// import {Helmet} from "react-helmet"
import {
  createMuiTheme,
  CssBaseline,
  responsiveFontSizes,
} from "@material-ui/core"
import {red, pink} from "@material-ui/core/colors"
// import {ThemeProvider} from "@material-ui/styles"
import styled, {ThemeProvider} from "styled-components"
import {Helmet} from "../../src/components"
// import {theme as myTheme} from "../../src/styles/themes"

const myTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: red,
      secondary: pink,
    },
  }),
)

export default function TopLayout(props) {
  return (
    <>
      <Helmet />
      <ThemeProvider theme={myTheme}>
        <div>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {props.children}
        </div>
      </ThemeProvider>
    </>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}
