import React from "react"
import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles"
// Material UI Theme
// TODO: Learn more about custom variables in Material UI themes.

const themeName = "Pomegranate Wild Strawberry Mussel"

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {main: "#f44335", contrastText: "#212121"},
      secondary: {main: "#FF4081"},
    },
  }),
)

export default theme
