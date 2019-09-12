import React, {Component} from "react"
import {StaticQuery, graphql} from "gatsby"
import {
  Chip,
  Box,
  Container,
  Divider,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core"
import {Button, IconButton} from "gatsby-theme-material-ui"
import styled from "styled-components/macro"
// import {Facebook as FacebookLogo, Instagram as InstagramLogo, Twitter as TwitterLogo, Vimeo as VimeoLogo} from "mdi-material-ui"
import {Content, Link, LinkExternal, PreviewCompatibleImage as Image} from "."
import logo from "../images/logo.svg"
import facebook from "../images/social/facebook.svg"
import instagram from "../images/social/instagram.svg"
import twitter from "../images/social/twitter.svg"
import vimeo from "../images/social/vimeo.svg"
// TODO: Decide between Typography align="center" & Box textAlign="center".

const StyledContentGridBox = styled(Box)`
  align: center;
  /* background-color: black; */
  background-color: ${props => props.theme.palette.secondary.darker};
  color: hsl(0, 0%, 96%);
`

const StyledDivider = styled(Divider)`
  margin-top: 6;
  margin-bottom: 3;
`

const StyledFooter = styled.footer`
  /* background-color: black; */
  background-color: ${props => props.theme.palette.secondary.darker};
  color: hsl(0, 0%, 96%);
  margin-bottom: 3;
  white-space: nowrap;
`

// Make sure the button attribute passed later actually gets used.
const StyledFooterButtonListItem = styled(ListItem)`
  color: ${props => props.theme.palette.secondary.contrastText};
`

const StyledFooterNavContainer = styled(Container)`
  /* background-color: black; */
  background-color: ${props => props.theme.palette.secondary.darker};
  color: hsl(0, 0%, 96%);
`

const StyledFooterIconButton = styled(IconButton)`
  color: ${props => props.theme.palette.primary.contrastText};
`

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
  // const classes = useStyles(props)

  return (
    <>
      <StyledDivider />
      <StyledFooter id="footer">
        <Box className="content">
          <Typography align="center">
            <img
              src={logo}
              alt="Kaldi"
              style={{width: "14em", height: "10em"}}
            />
          </Typography>
        </Box>
        <StyledContentGridBox>
          <StyledFooterNavContainer>
            <Grid container>
              <Grid item xs={4}>
                <Box component="section" className="menu">
                  <List component="nav" className="menu-list">
                    <StyledFooterButtonListItem button>
                      <Link to="/" className="navbar-item">
                        <ListItemText>Home</ListItemText>
                      </Link>
                    </StyledFooterButtonListItem>
                    <StyledFooterButtonListItem button>
                      <Link className="navbar-item" to="/about">
                        <ListItemText>About</ListItemText>
                      </Link>
                    </StyledFooterButtonListItem>
                    <StyledFooterButtonListItem button>
                      <Link className="navbar-item" to="/portfolio">
                        <ListItemText>Portfolio</ListItemText>
                      </Link>
                    </StyledFooterButtonListItem>
                    {/* <StyledFooterButtonListItem button>
                      <Link className="navbar-item" to="/contact/examples">
                        <ListItemText>Form Examples</ListItemText>
                      </Link>
                    </StyledFooterButtonListItem> */}
                    <StyledFooterButtonListItem button>
                      <LinkExternal
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ListItemText>Admin</ListItemText>
                      </LinkExternal>
                    </StyledFooterButtonListItem>
                  </List>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box component="section">
                  <List component="nav" className="menu-list">
                    {/* <StyledFooterButtonListItem button>
                      <Link className="navbar-item" to="/blog">
                        <ListItemText>Latest Stories</ListItemText>
                      </Link>
                    </StyledFooterButtonListItem> */}
                    <StyledFooterButtonListItem button>
                      <Link className="navbar-item" to="/contact">
                        <ListItemText>Contact</ListItemText>
                      </Link>
                    </StyledFooterButtonListItem>
                  </List>
                </Box>
              </Grid>
              <Grid item xs={4} className="social">
                <LinkExternal title="facebook" href="https://facebook.com">
                  <StyledFooterIconButton>
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{width: "1em", height: "1em"}}
                    />
                  </StyledFooterIconButton>
                </LinkExternal>
                <LinkExternal title="twitter" href="https://twitter.com">
                  <StyledFooterIconButton>
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      style={{width: "1em", height: "1em"}}
                    />
                  </StyledFooterIconButton>
                </LinkExternal>
                <LinkExternal title="instagram" href="https://instagram.com">
                  <StyledFooterIconButton>
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{width: "1em", height: "1em"}}
                    />
                  </StyledFooterIconButton>
                </LinkExternal>
                <LinkExternal title="vimeo" href="https://vimeo.com">
                  <StyledFooterIconButton>
                    <img
                      src={vimeo}
                      alt="Vimeo"
                      style={{width: "1em", height: "1em"}}
                    />
                  </StyledFooterIconButton>
                </LinkExternal>
              </Grid>
            </Grid>
          </StyledFooterNavContainer>
        </StyledContentGridBox>
      </StyledFooter>
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
