import React, {Component} from "react"
import PropTypes from "prop-types"
import {Grid, Typography} from "@material-ui/core"
import Header from "./Header"
import Footer from "./Footer"

class Page extends Component {
  render() {
    const {title, children} = this.props

    return (
      <>
        <Header />
        <Grid
          container
          direction="row"
          justify="center"
          style={{marginTop: "94px"}}
        >
          <Grid
            item
            style={{
              maxWidth: "calc(1136px - 60px)",
              width: "calc(100% - 60px)",
            }}
          >
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
      </>
    )
  }
}

export default Page
export {Page}
