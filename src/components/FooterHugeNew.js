import React from "react"
// import {Link} from "gatsby"
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuList,
  MenuItem,
  Typography,
} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
// TODO: Maybe try using CardMedia, GridList, Gatsby-Image or PreviewCompatibleImage instead.
// import Image from "material-ui-image"
import {PreviewCompatibleImage as Image} from "./PreviewCompatibleImage"
import Link from "./Link"
import LinkExternal from "./LinkExternal"
import logo from "../img/logo.svg"
import facebook from "../img/social/facebook.svg"
import instagram from "../img/social/instagram.svg"
import twitter from "../img/social/twitter.svg"
import vimeo from "../img/social/vimeo.svg"
// TODO: Triple nested Typography components seems like a code smell even if a variety of underlying root components are chosen.

class Footer extends React.Component {
  render() {
    return (
      <Typography
        component="footer"
        className="has-background-black has-text-white-ter"
      >
        <Typography component="Box" align="center">
          <Image
            src={logo}
            alt="Kaldi"
            style={{width: "14em", height: "10em"}}
          />
        </Typography>
        <Typography
          component="Box"
          align="center"
          className="has-background-black has-text-white-ter"
        >
          <Typography
            component="Container"
            className="has-background-black has-text-white-ter"
          >
            <Grid container>
              <Grid item xs={4}>
                <Menu component="section">
                  <MenuList>
                    <MenuItem>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Grid>
              <Grid item xs={4}>
                <Menu component="section">
                  <MenuList>
                    <MenuItem>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Grid>
              <Grid item xs={4} className="social">
                <LinkExternal title="facebook" href="https://facebook.com">
                  <Image
                    src={facebook}
                    alt="Facebook"
                    style={{width: "1em", height: "1em"}}
                  />
                </LinkExternal>
                <LinkExternal title="twitter" href="https://twitter.com">
                  <Image
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{width: "1em", height: "1em"}}
                  />
                </LinkExternal>
                <LinkExternal title="instagram" href="https://instagram.com">
                  <Image
                    src={instagram}
                    alt="Instagram"
                    style={{width: "1em", height: "1em"}}
                  />
                </LinkExternal>
                <LinkExternal title="vimeo" href="https://vimeo.com">
                  <Image
                    src={vimeo}
                    alt="Vimeo"
                    style={{width: "1em", height: "1em"}}
                  />
                </LinkExternal>
              </Grid>
            </Grid>
          </Typography>
        </Typography>
      </Typography>
    )
  }
}

export default Footer
export {Footer as FooterHugeNew}
