import React, {Component} from "react"
import {StaticQuery, graphql} from "gatsby"
import {
  Chip,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
// import {Facebook as FacebookLogo, Instagram as InstagramLogo, Twitter as TwitterLogo, Vimeo as VimeoLogo} from "mdi-material-ui"
import {Content, Link, LinkExternal, PreviewCompatibleImage as Image} from "."

import logo from "../img/logo.svg"
import facebook from "../img/social/facebook.svg"
import instagram from "../img/social/instagram.svg"
import twitter from "../img/social/twitter.svg"
import vimeo from "../img/social/vimeo.svg"

const useStyles = makeStyles({
  divider: {
    marginTop: "6",
    marginBottom: "3",
  },
  footer: {
    // Also may need something like "footer has-background-black has-text-white-ter"
    marginBottom: "3",
    whiteSpace: "nowrap",
  },
  menuButton: {
    color: "primary.contrastText",
  },
})

const Footer = props => {
  const {
    // classes,
    data: {
      site: {
        siteMetadata: {
          title,
          contact: {email, phone},
        },
      },
    },
  } = props
  const classes = useStyles(props)

  return (
    <>
      <Divider className={classes.divider} />
      <footer className={classes.footer} id="footer">
        <Box className="content has-text-centered">
          <img src={logo} alt="Kaldi" style={{width: "14em", height: "10em"}} />
        </Box>
        <Box className="content has-text-centered has-background-black has-text-white-ter">
          <Container className="container has-background-black has-text-white-ter">
            <Grid container className="columns">
              <Grid item xs={4}>
                <section className="menu">
                  <List component="nav" className="menu-list">
                    <ListItem>
                      <Link to="/" className="navbar-item">
                        <ListItemText>Home</ListItemText>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link className="navbar-item" to="/about">
                        <ListItemText>About</ListItemText>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link className="navbar-item" to="/portfolio">
                        <ListItemText>Portfolio</ListItemText>
                      </Link>
                    </ListItem>
                    {/* <ListItem>
                      <Link className="navbar-item" to="/contact/examples">
                        <ListItemText>Form Examples</ListItemText>
                      </Link>
                    </ListItem> */}
                    <ListItem>
                      <LinkExternal
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ListItemText>Admin</ListItemText>
                      </LinkExternal>
                    </ListItem>
                  </List>
                </section>
              </Grid>
              <Grid item xs={4}>
                <section>
                  <List component="nav" className="menu-list">
                    {/* <ListItem>
                      <Link className="navbar-item" to="/blog">
                        <ListItemText>Latest Stories</ListItemText>
                      </Link>
                    </ListItem> */}
                    <ListItem>
                      <Link className="navbar-item" to="/contact">
                        <ListItemText>Contact</ListItemText>
                      </Link>
                    </ListItem>
                  </List>
                </section>
              </Grid>
              <Grid item xs={4} className="social">
                <LinkExternal title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{width: "1em", height: "1em"}}
                  />
                </LinkExternal>
                <LinkExternal title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{width: "1em", height: "1em"}}
                  />
                </LinkExternal>
                <LinkExternal title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{width: "1em", height: "1em"}}
                  />
                </LinkExternal>
                <LinkExternal title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{width: "1em", height: "1em"}}
                  />
                </LinkExternal>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </footer>
    </>
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
    render={data => <Footer data={data} />}
  />
)

// export default Footer
