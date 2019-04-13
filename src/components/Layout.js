import React from "react"
import PropTypes from "prop-types"
import {ScrollingProvider} from "react-scroll-section"
import {Grid, Typography} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import Footer from "./Footer"
import Header from "./Header"
import Helmet from "./Helmet"
// import Navbar from "./Navbar"
// import {FooterHugeNew as Footer} from "./FooterHugeNew"

const Layout = props => (
  <>
    <ScrollingProvider>
      <Box component="div">
        <Helmet />
        <Header />
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
      </Box>
    </ScrollingProvider>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
export {Layout}
