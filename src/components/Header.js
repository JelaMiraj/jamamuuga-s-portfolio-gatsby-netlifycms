import React from "react"
import {StaticQuery, graphql} from "gatsby"
import {
  AppBar,
  Avatar,
  Chip,
  Grid,
  Hidden,
  Toolbar,
  Typography,
} from "@material-ui/core"
import {MaterialUi} from "mdi-material-ui"
import {Link, Menu, MenuMobile} from "."

const Header = props => {
  return (
    <AppBar id="appBar">
      <Toolbar>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Chip
              id="logo"
              variant="outlined"
              avatar={
                <Avatar id="logoIcon">
                  <MaterialUi />
                </Avatar>
              }
              label={
                <Link to="/">
                  {props.data.site.siteMetadata.title.toUpperCase()}
                </Link>
              }
            />
          </Grid>
          <Grid item>
            <Hidden smDown>
              <Typography component="span" variant="caption">
                <Menu />
              </Typography>
            </Hidden>
            <Hidden mdUp>
              <MenuMobile />
            </Hidden>
          </Grid>
        </Grid>
        <Grid item />
      </Toolbar>
    </AppBar>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <Header data={data} />}
  />
)
