import React from "react"
import {StaticQuery, graphql} from "gatsby"
import {Button, IconButton} from "@material-ui/core"
import {GithubCircle} from "mdi-material-ui"
import {withStyles} from "@material-ui/core/styles"
import {Link} from "."
// import logo from "../img/logo.svg"

const styles = theme => ({
  menuButton: {
    color: theme.palette.primary.contrastText,
  },
})

const Menu = withStyles(styles)(props => {
  const {
    classes,
    data: {
      site: {
        siteMetadata: {menuLinks},
      },
    },
  } = props

  return (
    <>
      {menuLinks.map(link => (
        <Link key={link.name} to={link.link}>
          <Button className={classes.menuButton}>{link.name}</Button>
        </Link>
      ))}
      <a
        href="https://github.com/Jamamuuga/jamamuuga-s-portfolio-gatsby-netlifycms"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton className={classes.menuButton}>
          <GithubCircle />
        </IconButton>
      </a>
    </>
  )
})

export default props => (
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
