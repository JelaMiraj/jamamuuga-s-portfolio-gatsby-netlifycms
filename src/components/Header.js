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
import styled from "styled-components/macro"
import {PaletteOutline} from "mdi-material-ui"
import {Link, Menu, MenuMobile} from "."
// FIXME: Get color assignment issues sorted out so things like hard-coding aren't necessary.
// TODO: Use color: inherit where it works & lines up right.
// TODO: Use Material UI AppBar API Docs to sort out style propagation issues. https://material-ui.com/api/app-bar/#appbar-api

// TODO: Hopefully explicit props passing isn't really needed.
// const StyledAppBar = styled(({color, ...other}) => <AppBar {...other} />)`
// eslint-disable-next-line
const StyledAppBar = styled(AppBar)`
  // color: ${props => props.color || "#f44336"};
  color: ${props => props.color || props.theme.palette.primary.main};

  /* & .MuiAppBar-colorPrimary {
    // TODO: Set color: to get color of textPrimary from passed theme object.
    // background-color: ${props.backgroundColor || props.theme.palette.secondary.main};
    background-color: ${props.color || props.theme.palette.primary.main};
  } */
`

const StyledAvatar = styled(Avatar)`
  background-color: ${props =>
    props.backgroundColor || props.theme.palette.secondary.light};
`

const StyledChip = styled(Chip)`
  color: ${props => props.color || props.theme.palette.secondary.light};
`

const Header = props => (
  <StyledAppBar id="appBar">
    <Toolbar>
      <Grid container justify="space-between" alignItems="center" spacing={2}>
        <Grid item>
          <StyledChip
            id="logo"
            variant="default"
            avatar={
              <StyledAvatar id="logoIcon">
                <PaletteOutline />
              </StyledAvatar>
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
  </StyledAppBar>
)

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
