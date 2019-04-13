// Setup custom Material-UI theme
// eslint-disable-next-line rule
import {install} from "@material-ui/styles"

install()

// eslint-disable-next-line rule
import React from "react"
import {createMuiTheme} from "@material-ui/core/styles"
import {green, grey, purple, red} from "@material-ui/core/colors"
// TODO: Update this Material UI Theme from v1 to v3 & v4 compatible.

const headlineFont = `Merriweather, Georgia, serif`
const bodyFont = `"Open Sans", Roboto, "Helvetica Neue", Arial, sans-serif`

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    tertiary: grey,
    error: red,
  },
  typography: {
    // TODO: Stop repeating greys, font weights, & font families.
    useNextVariants: true,
    fontFamily: bodyFont,
    // fontSize: 14, // default
    // color: grey[500],
    fontSize1: "3rem",
    fontSize2: "2.5rem",
    fontSize3: "2rem",
    fontSize4: "1.5rem",
    fontSize5: "1.25rem",
    fontSize6: "1rem",
    fontSize7: "0.75rem",
    fontWeightThin: 100,
    fontWeightExtraLight: 200,
    fontWeightLight: 300,
    fontWeightNormal: 400,
    fontWeightRegular: 400,
    // fontWeightMedium: 600,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    fontWeightExtraBold: 800,
    fontWeightBlack: 900,
    h4: {
      fontFamily: headlineFont,
      color: grey[900],
    },
    h3: {fontFamily: headlineFont, color: grey[900]},
    h2: {fontFamily: headlineFont, color: grey[900]},
    h1: {fontFamily: headlineFont, color: grey[900]},
    h5: {fontFamily: headlineFont, color: grey[900]},
    subtitle1: {fontFamily: headlineFont, color: grey[900]},
    // h6: {fontFamily: headlineFont, color: grey[900], fontWeight: 400},
    h6: {fontFamily: headlineFont, color: grey[900]},
    body2: {
      fontFamily: bodyFont,
      color: grey[700],
      // fontWeight: 400,
      // margin: "1em 0",
      // "& h2": {fontFamily: headlineFont, color: grey[900], fontWeight: 400},
      // "& h3": {fontFamily: headlineFont, color: grey[900], fontWeight: 400},
    },
  },
  overrides: {
    // TODO: Refer to MuiGrid & "spacing-xs-16" in a proper modern way & verify the appropriate places.
    // MuiGrid: {
    //   "spacing-xs-16": {
    //     margin: "0 -8px",
    //     "& > *[class^=MuiGrid-typeItem]": {
    //       padding: "0 8px",
    //     },
    //   },
    // },
  },
})

export default theme
export {theme}
