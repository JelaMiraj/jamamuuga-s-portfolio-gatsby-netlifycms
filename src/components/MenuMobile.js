import React, {Component} from "react"
import {StaticQuery, graphql} from "gatsby"
import {ClickAwayListener, IconButton, Menu, MenuItem} from "@material-ui/core"
import {withStyles} from "@material-ui/styles"
import {DotsVertical} from "mdi-material-ui"
import Link from "./Link"
import LinkExternal from "./LinkExternal"
// import logo from "../img/logo.svg"
// TODO: Switch to 3rd party automated event handling as suggested in Material UI Menu docs.

const styles = {
  dotsVerticalIcon: {
    color: "#efefef",
  },
}

class MenuMobile extends Component {
  state = {
    anchorEl: null,
  }

  handleOpen = event => {
    this.setState({anchorEl: event.currentTarget})
  }

  handleClose = () => {
    this.setState({anchorEl: null})
  }

  render() {
    const {anchorEl} = this.state

    // const {menuLinks} = this.props.data.site.siteMetadata
    const {
      classes,
      data: {
        site: {
          siteMetadata: {menuLinks},
        },
      },
    } = this.props

    return (
      <>
        <IconButton onClick={this.handleOpen}>
          <DotsVertical className={classes.dotsVerticalIcon} />
        </IconButton>
        <ClickAwayListener onClickAway={this.handleClose}>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            {menuLinks.map(link => (
              <Link key={link.name} to={link.link}>
                <MenuItem>{link.name}</MenuItem>
              </Link>
            ))}
            <LinkExternal
              className="navbar-item"
              href="https://github.com/Jamamuuga/jamamuuga-s-portfolio-gatsby-netlifycms"
            >
              <MenuItem>Github Repository</MenuItem>
            </LinkExternal>
          </Menu>
        </ClickAwayListener>
      </>
    )
  }
}

const StyledMenuMobile = withStyles(styles)(MenuMobile)

const MenuMobileQuery = props => (
  <StaticQuery
    query={graphql`
      query MenuMobileQuery {
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
    render={data => <StyledMenuMobile active={props.active} data={data} />}
  />
)

export default MenuMobileQuery
export {MenuMobileQuery as MenuMobile}
