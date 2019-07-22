import React from "react"
import {PropTypes} from "prop-types"
import {ScrollingProvider} from "react-scroll-section"
import {Grid, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
// import GlobalStyle from "../styles/global-style"
import {Footer, Header} from "."
// import {Navbar} from "."
import useSiteMetadata from "./SiteMetadata"

const useStyles = makeStyles({
  gridContainer: {
    marginTop: 94,
  },
  contentBox: {
    maxWidth: "calc(1136px - 60px)",
    width: "calc(100% - 60px)",
  },
  title: {
    textAlign: "center",
  },
})

// TODO: Find out if we need any <GlobalStyle />
const Layout = props => {
  const classes = useStyles(props)
  const {title, children} = props

  return (
    <>
      <ScrollingProvider>
        <div>
          {/* <Helmet /> */}
          {/* <GlobalStyle /> */}
          <Header />
          <Grid
            className={classes.gridContainer}
            container
            direction="row"
            justify="center"
          >
            <Grid className={classes.contentBox} item>
              {title ? (
                <Typography className={classes.title} variant="h2" gutterBottom>
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
// export {Layout}
