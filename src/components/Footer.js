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
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core"
// import {Facebook as FacebookLogo, Instagram as InstagramLogo, Twitter as TwitterLogo, Vimeo as VimeoLogo} from "mdi-material-ui"
import {Content, Link, LinkExternal, PreviewCompatibleImage as Image} from "."

import logo from "../img/logo.svg"
import facebook from "../img/social/facebook.svg"
import instagram from "../img/social/instagram.svg"
import twitter from "../img/social/twitter.svg"
import vimeo from "../img/social/vimeo.svg"

const useStyles = makeStyles(theme => ({
  contentGridBox: {
    align: "center",
    // backgroundColor: "black",
    // backgroundColor: theme.palette.tertiary.darker,
    backgroundColor: theme.palette.secondary.darker,
    color: "hsl(0, 0%, 96%)",
  },
  divider: {
    marginTop: "6",
    marginBottom: "3",
  },
  footer: {
    // backgroundColor: "black",
    // backgroundColor: theme.palette.tertiary.darker,
    backgroundColor: theme.palette.secondary.darker,
    color: "hsl(0, 0%, 96%)",
    marginBottom: "3",
    whiteSpace: "nowrap",
  },
  footerButton: {
    color: theme.palette.secondary.contrastText,
  },
  footerNavContainer: {
    // backgroundColor: "black",
    // backgroundColor: theme.palette.tertiary.darker,
    backgroundColor: theme.palette.secondary.darker,
    color: "hsl(0, 0%, 96%)",
  },
  menuButton: {
    color: theme.palette.primary.contrastText,
  },
}))

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
        <Box align="center" className="content">
          <img src={logo} alt="Kaldi" style={{width: "14em", height: "10em"}} />
        </Box>
        <Box className={classes.contentGridBox}>
          <Container className={classes.footerNavContainer}>
            <Grid container>
              <Grid item xs={4}>
                <Box component="section" className="menu">
                  <List component="nav" className="menu-list">
                    <ListItem button className={classes.footerButton}>
                      <Link to="/" className="navbar-item">
                        <ListItemText>Home</ListItemText>
                      </Link>
                    </ListItem>
                    <ListItem button className={classes.footerButton}>
                      <Link className="navbar-item" to="/about">
                        <ListItemText>About</ListItemText>
                      </Link>
                    </ListItem>
                    <ListItem button className={classes.footerButton}>
                      <Link className="navbar-item" to="/portfolio">
                        <ListItemText>Portfolio</ListItemText>
                      </Link>
                    </ListItem>
                    {/* <ListItem button className={classes.footerButton}>
                      <Link className="navbar-item" to="/contact/examples">
                        <ListItemText>Form Examples</ListItemText>
                      </Link>
                    </ListItem> */}
                    <ListItem button className={classes.footerButton}>
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
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box component="section">
                  <List component="nav" className="menu-list">
                    {/* <ListItem button className={classes.footerButton}>
                      <Link className="navbar-item" to="/blog">
                        <ListItemText>Latest Stories</ListItemText>
                      </Link>
                    </ListItem> */}
                    <ListItem button className={classes.footerButton}>
                      <Link className="navbar-item" to="/contact">
                        <ListItemText>Contact</ListItemText>
                      </Link>
                    </ListItem>
                  </List>
                </Box>
              </Grid>
              <Grid item xs={4} className="social">
                <LinkExternal title="facebook" href="https://facebook.com">
                  <IconButton className={classes.footerButton}>
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{width: "1em", height: "1em"}}
                    />
                  </IconButton>
                </LinkExternal>
                <LinkExternal title="twitter" href="https://twitter.com">
                  <IconButton className={classes.footerButton}>
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      style={{width: "1em", height: "1em"}}
                    />
                  </IconButton>
                </LinkExternal>
                <LinkExternal title="instagram" href="https://instagram.com">
                  <IconButton className={classes.footerButton}>
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{width: "1em", height: "1em"}}
                    />
                  </IconButton>
                </LinkExternal>
                <LinkExternal title="vimeo" href="https://vimeo.com">
                  <IconButton className={classes.footerButton}>
                    <img
                      src={vimeo}
                      alt="Vimeo"
                      style={{width: "1em", height: "1em"}}
                    />
                  </IconButton>
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
