// See https://github.com/mui-org/material-ui/tree/master/examples/gatsby
import React from "react"
import {MuiThemeProvider} from "@material-ui/core/styles"
// import CssBaseline from "@material-ui/core/CssBaseline"
import JssProvider from "react-jss/lib/JssProvider"
import Hidden from "@material-ui/core/Hidden"
import getPageContext from "./getPageContext"
import GlobalStyle from "../styles/global-style"
import myTheme from "../styles/themes/theme"

function withRoot(Component) {
  class WithRoot extends React.Component {
    constructor(props) {
      super(props)
      this.muiPageContext = getPageContext()
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector("#jss-server-side")
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render() {
      return (
        <JssProvider generateClassName={this.muiPageContext.generateClassName}>
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          {/* <MuiThemeProvider
            theme={this.muiPageContext.theme}
            sheetsManager={this.muiPageContext.sheetsManager}
          > */}
          <MuiThemeProvider
            theme={myTheme}
            sheetsManager={this.muiPageContext.sheetsManager}
          >
            {/* CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. Currently loaded from custom GlobalStyle component. */}
            <GlobalStyle />
            <Hidden implementation="css">
              <Component {...this.props} />
            </Hidden>
          </MuiThemeProvider>
        </JssProvider>
      )
    }
  }

  return WithRoot
}

export default withRoot
