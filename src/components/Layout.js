import React from "react"
// FIXME: Switch to MUI Themes.
// import {ThemeProvider} from 'styled-components'
// import {MUIThemeProvider, withStyles} from '@material-ui/core/styles'
import PropTypes from "prop-types"
import {ScrollingProvider} from "react-scroll-section"
import {Grid, Typography} from "@material-ui/core"
// import GlobalStyle from '../styles/global-style'
// TODO: Import a proper Styled System theme here instead of a separate pure color object.
// import colors from '../styles/themes/colors'
import Footer from "./Footer"
import Header from "./Header"
import Helmet from "./Helmet"
// TODO: Why is this navigating down & back up to same folder?
// import Navbar from './Navbar'
// import Footer from '../components/Footer-Huge-New'
// import mytheme from '../styles/themes/theme'
// FIXME: using MUIThemeProvider here breaks things...

// TODO: Find out if we need any <GlobalStyle />
// const Layout = ({children}) => (
const Layout = props => (
  <>
    {/* <MUIThemeProvider theme={mytheme}> */}
    <ScrollingProvider>
      <div>
        <Helmet />
        <Header />
        {/* <div>{props.children}</div> */}
        <Grid container style={{marginTop: "94px"}}>
          <Grid item container direction="row">
            <Grid item container direction="column" xs={12}>
              {props.title ? (
                <Typography
                  variant="h2"
                  gutterBottom
                  style={{textAlign: "center"}}
                >
                  {props.title}
                </Typography>
              ) : null}
              {props.children}
              <Footer />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ScrollingProvider>
    {/* </MUIThemeProvider> */}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
