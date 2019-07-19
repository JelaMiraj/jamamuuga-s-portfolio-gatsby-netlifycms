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
import {makeStyles} from "@material-ui/core/styles"
import {PaletteOutline} from "mdi-material-ui"
import {Link, Menu, MenuMobile} from "."
// TODO: Put custom styles seperately up top.

// const {palette} = useTheme()

const useStyles = makeStyles({
  appBar: {
    color: "primary",
  },
  avatar: {
    // backgroundColor: palette.tertiary,
    // backgroundColor: "tertiary",
    backgroundColor: "secondary.light",
  },
  chip: {
    // color: palette.secondary,
    color: "secondary.light",
  },
})

const Header = props => {
  const classes = useStyles(props)

  return (
    <AppBar id="appBar" className={classes.appBar}>
      <Toolbar>
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
