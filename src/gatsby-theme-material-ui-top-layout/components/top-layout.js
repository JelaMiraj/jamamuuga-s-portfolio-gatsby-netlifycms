import React from "react"
import {PropTypes} from "prop-types"
import {Box, CssBaseline} from "@material-ui/core"
import {StylesProvider, ThemeProvider} from "@material-ui/styles"
import styled, {ThemeProvider as StyledThemeProvider} from "styled-components/macro"
import {Helmet} from "."
import theme as myTheme from "../theme"
// TODO: Avoid the need to wrap multiple providers.
// TODO: Convert website & local Gatsby plugin into a monorepo using Lerna & Yarn Workspaces to help guard against things like Yarn PnP issues.

export default function TopLayout({children, theme = myTheme}, ...props) {
  return (
    <>
      <Helmet />
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <Box
              color="primary.main"
              bgcolor="background.paper"
              fontFamily="h6.fontFamily"
              fontSize={{
                xs: "h6.fontSize",
                sm: "h4.fontSize",
                md: "h3.fontSize",
              }}
              p={{xs: 2, sm: 3, md: 4}}
            >
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {children}
            </Box>
          </StyledThemeProvider>
        </ThemeProvider>
      </StylesProvider>
    </>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}
