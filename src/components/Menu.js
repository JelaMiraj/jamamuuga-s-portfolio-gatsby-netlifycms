import React from "react"
import {StaticQuery, graphql} from "gatsby"
import {Button, IconButton} from "@material-ui/core"
import {GithubCircle} from "mdi-material-ui"
import {withStyles} from "@material-ui/styles"
import Link from "./Link"
import LinkExternal from "./LinkExternal"
// import logo from "../img/logo.svg"

const styles = theme => ({
  menuButton: {
    color: theme.palette.primary.contrastText
  }
})

const Menu = withStyles(styles)(props => {
  // const {menuLinks} = props.data.site.siteMetadata
  const {
    classes,
    data: {
      site: {
        siteMetadata: { menuLinks }
      }
    }
  } = props

  return (
    <>
      {menuLinks.map(link => (
        <Link key={link.name} to={link.link}>
          <Button className={classes.menuButton}>{link.name}</Button>
        </Link>
      ))}
      <LinkExternal
        className="navbar-item"
        href="https://github.com/Jamamuuga/jamamuuga-s-portfolio-gatsby-netlifycms"
      >
        <IconButton className={classes.menuButton}>
          <GithubCircle />
        </IconButton>
      </LinkExternal>
    </>
  )
}

const MenuQuery = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <Menu data={data} />}
  />
)

export default MenuQuery
export {MenuQuery as Menu}
