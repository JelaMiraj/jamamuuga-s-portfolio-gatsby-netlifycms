import React from "react"
// import {StaticQuery, Link, graphql} from "gatsby"
import {StaticQuery, graphql} from "gatsby"
import {Button, IconButton} from "@material-ui/core"
import {GithubCircle} from "mdi-material-ui"
import Link from "./Link"
import LinkExternal from "./LinkExternal"
// import logo from "../img/logo.svg"

const Menu = props => {
  const {menuLinks} = props.data.site.siteMetadata

  return (
    <>
      {menuLinks.map(link => (
        <Link key={link.name} to={link.link}>
          <Button style={{color: "#fff"}}>{link.name}</Button>
        </Link>
      ))}
      <LinkExternal
        className="navbar-item"
        href="https://github.com/Jamamuuga/jamamuuga-s-portfolio-gatsby-netlifycms"
      >
        <IconButton className="icon" style={{color: "#fff"}}>
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
