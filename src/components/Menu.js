import React from "react"
import {StaticQuery, graphql} from "gatsby"
import {Button, IconButton, makeStyles} from "@material-ui/core"
import {GithubCircle} from "mdi-material-ui"
import {Link, LinkExternal} from "."
// import logo from "../images/logo.svg"

const useStyles = makeStyles(theme => ({
  menuButton: {
    // color: "primary.contrastText",
    color: theme.palette.primary.contrastText,
  },
}))

const Menu = props => {
  const {
    // classes,
    data: {
      site: {
        siteMetadata: {menuLinks},
      },
    },
  } = props
  const classes = useStyles(props)

  return (
    <>
      {menuLinks.map(link => (
        <Link key={link.name} to={link.link}>
          <Button className={classes.menuButton}>{link.name}</Button>
        </Link>
      ))}
      <LinkExternal href="https://github.com/Jamamuuga/jamamuuga-s-portfolio-gatsby-netlifycms">
        <IconButton className={classes.menuButton}>
          <GithubCircle />
        </IconButton>
      </LinkExternal>
    </>
  )
}

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
