// See https://github.com/mui-org/material-ui/tree/master/examples/gatsby
import "./installMuiStyles"
import React, {Component} from "react"
import {StylesProvider, ThemeProvider} from "@material-ui/styles"
// import {JssProvider} from "react-jss/lib"
import {Hidden} from "@material-ui/core"
import getPageContext from "./getPageContext"
import GlobalStyle from "../styles/global-style"

function withRoot(InnerComponent) {
  class WithRoot extends Component {
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
        <StylesProvider
          generateClassName={this.muiPageContext.generateClassName}
          sheetsManager={this.muiPageContext.sheetsManager}
        >
          {/* Material UI's ThemeProvider makes the theme available down the React tree thanks to React context. */}
          <ThemeProvider theme={this.muiPageContext.theme}>
            {/* CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. Currently loaded from custom GlobalStyle component. */}
            <GlobalStyle />
            <Hidden implementation="css">
              <InnerComponent {...this.props} />
            </Hidden>
          </ThemeProvider>
        </StylesProvider>
      )
    }
  }

  return WithRoot
}

export default withRoot
export {withRoot}
