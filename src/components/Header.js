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
// TODO: Use Material UI Docs (especially AppBar API Docs: https://material-ui.com/api/app-bar/#appbar-api) to sort out style propagation issues. Also check out Chrome DevTools, and other Styled Components & Material UI Docs.
// TODO: Use Skeleton components as loading placeholders.

// TODO: Hopefully explicit props passing isn't really needed.
// const StyledAppBar = styled(({color, ...other}) => <AppBar {...other} />)`
// eslint-disable-next-line
const StyledAppBar = styled(AppBar)`
  /* "#f44336" */
  /* background: ${props =>
    props.background || props.theme.palette.primary.main}; */
  /* background: #f44336; */
  /* background-color: #f44336; */
  /* Text Color */
  /* color: #fff; */

  /* .MuiAppBar-colorPrimary { */
    /* TODO: Set color: to get color of textPrimary from passed theme object. */
    /* background-color: ${props.color || props.theme.palette.primary.main}; */
    /* background-color: #f44336; */
    /* Text Color */
    /* color: #fff; */
  /* } */
`

const StyledAvatar = styled(Avatar)`
  /* TODO: Work on accessibility of colors & color combos. */
  /* background-color: ${props =>
    props.backgroundColor || props.theme.palette.secondary.light}; */
  /* background: ${props.theme.palette.secondary.light}; */
  /* TODO: Use indirect "secondary.light" or refer to theme object instead of hard coding color. */
  background: rgb(255, 102, 154);
  /* background-color: rgb(255, 102, 154); */
  color: white;

  /* .MuiAvatar-colorDefault {
    background-color: rgb(255, 102, 154);
  } */
`

const StyledChip = styled(Chip)`
  /* color: ${props => props.color || props.theme.palette.secondary.light}; */
  /* color: rgb(255, 102, 154); */
`

const Header = ({data}) => (
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
              <Link to="/">{data.site.siteMetadata.title.toUpperCase()}</Link>
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
