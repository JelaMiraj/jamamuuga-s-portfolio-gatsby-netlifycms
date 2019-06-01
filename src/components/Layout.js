import React, {Component} from "react"
import PropTypes from "prop-types"
import {ScrollingProvider} from "react-scroll-section"
import {Grid, Typography} from "@material-ui/core"
import {withStyles} from "@material-ui/styles"
import GlobalStyle from "../styles/global-style"
import Footer from "./Footer"
import Header from "./Header"
import Helmet from "./Helmet"
// import Navbar from "./Navbar"
// import Footer from "./FooterHugeNew"
import useSiteMetadata from './SiteMetadata'

const styles = {
  container: {
    marginTop: 94,
  },
  contentBox: {
    maxWidth: "calc(1136px - 60px)",
    width: "calc(100% - 60px)",
  },
  title: {
    textAlign: "center",
  },
}

// TODO: Find out if we need any <GlobalStyle />
// const Layout = ({children}) => (
class Layout extends Component {
  render() {
    const {classes, title, children} = this.props

    return (
      <>
        <ScrollingProvider>
          <div>
            <Helmet />
            {/* <GlobalStyle /> */}
            <Header />
            <Grid
              className={classes.container}
              container
              direction="row"
              justify="center"
            >
              <Grid className={classes.contentBox} item>
                {title ? (
                  <Typography
                    className={classes.title}
                    variant="h2"
                    gutterBottom
                  >
                    {title}
                  </Typography>
                ) : null}
                {children}
                <Footer />
              </Grid>
            </Grid>
          </div>
        </ScrollingProvider>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// export default Layout
export default withStyles(styles)(Layout)
// export {Layout}
