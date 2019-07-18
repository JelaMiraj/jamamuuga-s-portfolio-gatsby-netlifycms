import React from "react"
import {PropTypes} from "prop-types"
// import {Helmet} from "react-helmet"
import {Helmet} from "../../src/components"
import {CssBaseline} from "@material-ui/core"
import {theme} from "../../src/styles/themes"
import {ThemeProvider} from "@material-ui/styles"

export default function TopLayout(props) {
  return (
    <>
      <Helmet />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}
