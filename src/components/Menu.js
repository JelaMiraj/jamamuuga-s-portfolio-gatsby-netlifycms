import React from "react"
import {StaticQuery, graphql} from "gatsby"
import {Button, IconButton} from "gatsby-theme-material-ui"
import styled from "styled-components/macro"
import {GithubCircle} from "mdi-material-ui"
import {Link, LinkExternal} from "."
// import logo from "../images/logo.svg"

const StyledMenuButton = styled(Button)`
  /* color: "primary.contrastText" */
  color: ${props => props.theme.palette.primary.contrastText};
`

const StyledMenuIconButton = styled(IconButton)`
  /* color: "primary.contrastText" */
  color: ${props => props.theme.palette.primary.contrastText};
`

const Menu = props => {
  const {
    // classes,
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
          <StyledMenuButton>{link.name}</StyledMenuButton>
        </Link>
      ))}
      <LinkExternal href="https://github.com/Jamamuuga/jamamuuga-s-portfolio-gatsby-netlifycms">
        <StyledMenuIconButton>
          <GithubCircle />
        </StyledMenuIconButton>
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
