import React from "react"
// import {StaticQuery, Link, graphql} from "gatsby"
import {StaticQuery, graphql} from "gatsby"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import {GithubCircle} from "mdi-material-ui"
import Link from "./Link"
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
      <a
        className="navbar-item"
        href="https://github.com/Jamamuuga/jamamuuga-s-portfolio-gatsby-netlifycms"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton className="icon" style={{color: "#fff"}}>
          <GithubCircle />
        </IconButton>
      </a>
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
