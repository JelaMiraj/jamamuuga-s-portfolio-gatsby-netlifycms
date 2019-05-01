import React, {Component} from "react"
// import PropTypes from "prop-types"
import {Grid, Typography} from "@material-ui/core"
import withStyles from "@material-ui/styles/withStyles"
import Header from "./Header"
import Footer from "./Footer"
// import "../css/style.styl"

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

class Page extends Component {
  render() {
    const {classes, title, children} = this.props

    return (
      <>
        <Header />
        <Grid
          className={classes.container}
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
      </>
    )
  }
}

const PageWrapped = withStyles(styles)(Page)

export default PageWrapped
export {PageWrapped as Page}
