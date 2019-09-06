// src/ui/theme/index.js

import {createMuiTheme} from "@material-ui/core/styles"

const palette = {
  primary: {main: "#f44335", contrastText: "#212121"},
  secondary: {main: "#FF4081"},
}
const themeName = "Pomegranate Wild Strawberry Mussel"

export default createMuiTheme({palette, themeName})
