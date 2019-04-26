import React from "react"
import PropTypes from "prop-types"
import {ScrollingProvider} from "react-scroll-section"
import {Grid, Typography} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import {withStyles} from "@material-ui/styles"
import {Footer, Header, Helmet} from "."
// import {Navbar} from "."
// import {FooterHugeNew as Footer} from "."
// TODO: Maybe this Box based div like wrapper should be Container equivalent instead.

const Layout = ({children, title}) => (
  <>
    <ScrollingProvider>
      <Box>
        <Helmet />
        <Header />
        <Grid container style={{marginTop: "94px"}}>
          <Grid item container direction="row">
            <Grid item container direction="column" xs={12}>
              {title ? (
                <Typography
                  variant="h2"
                  gutterBottom
                  style={{textAlign: "center"}}
                >
                  {title}
                </Typography>
              ) : null}
              {children}
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
  title: PropTypes.string,
}

export default Layout
export {Layout}
