// Setup base Material-UI theme
import {createMuiTheme} from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'
import grey from '@material-ui/core/colors/grey'
// TODO: Update this Material UI Them from v1 to v3 & v4 compatible.

const headlineFont = `Merriweather, Georgia, serif`
const bodyFont = `"Open Sans", Roboto, "Helvetica Neue", Arial, sans-serif`

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    error: red,
  },
  typography: {
    // TODO: Stop repeating greys, font weights, & font families.
    useNextVariants: true,
    fontFamily: bodyFont,
    fontSize: 14, // default
    // color: grey[500],
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    h4: {
      fontFamily: headlineFont,
      color: grey[900],
    },
    h3: {fontFamily: headlineFont, color: grey[900]},
    h2: {fontFamily: headlineFont, color: grey[900]},
    h1: {fontFamily: headlineFont, color: grey[900]},
    h5: {fontFamily: headlineFont, color: grey[900]},
    subtitle1: {fontFamily: headlineFont, color: grey[900]},
    h6: {fontFamily: headlineFont, color: grey[900], fontWeight: 400},
    body2: {
      fontFamily: bodyFont,
      color: grey[700],
      fontWeight: 400,
      margin: '1em 0',
      '& h2': {fontFamily: headlineFont, color: grey[900], fontWeight: 400},
      '& h3': {fontFamily: headlineFont, color: grey[900], fontWeight: 400},
    },
  },
  overrides: {
    // TODO: Refer to MuiGrid & 'spacing-xs-16' in a proper modern way & verify the appropriate places.
    MuiGrid: {
      'spacing-xs-16': {
        margin: '0 -8px',
        '& > *[class^=MuiGrid-typeItem]': {
          padding: '0 8px',
        },
      },
    },
  },
})

export default theme
