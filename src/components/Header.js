import React from "react"
import {StaticQuery, graphql} from "gatsby"
import {
  AppBar,
  Avatar,
  Chip,
  Grid,
  Hidden,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core"
import {PaletteOutline} from "mdi-material-ui"
import {Link, Menu, MenuMobile} from "."

const useStyles = makeStyles(theme => ({
  appBar: {
    // color: "primary",
    color: theme.palette.primary,
  },
  avatar: {
    // backgroundColor: palette.tertiary,
    // backgroundColor: "tertiary",
    // backgroundColor: "secondary.light",
    backgroundColor: theme.palette.secondary.light,
  },
  chip: {
    // color: palette.secondary,
    // color: "secondary.light",
    color: theme.palette.secondary.light,
  },
  toolbar: {
    // color: "primary",
    color: theme.palette.primary,
  },
}))

const Header = props => {
  const classes = useStyles(props)

  return (
    <AppBar id="appBar" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Grid container justify="space-between" alignItems="center" spacing={2}>
          <Grid item>
            <Chip
              id="logo"
              className={classes.chip}
              variant="default"
              avatar={
                <Avatar id="logoIcon" className={classes.avatar}>
                  <PaletteOutline />
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
