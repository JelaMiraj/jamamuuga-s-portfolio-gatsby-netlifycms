import React from "react"
// import {StaticQuery, Link, graphql} from "gatsby"
import {StaticQuery, graphql} from "gatsby"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import IconButton from "@material-ui/core/IconButton"
import {DotsVertical} from "mdi-material-ui"
import withStyles from "@material-ui/styles/withStyles"
import Link from "./Link"
// import logo from "../img/logo.svg"

const styles = {
  dotsVerticalIcon: {
    color: "#efefef",
  },
}

class MenuMobile extends React.Component {
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
            <a
              href="https://github.com/Jamamuuga/jamamuuga-s-portfolio-gatsby-netlifycms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuItem>Github Repository</MenuItem>
            </a>
          </Menu>
        </ClickAwayListener>
      </>
    )
  }
}

const StyledMenuMobile = withStyles(styles)(MenuMobile)

export default props => (
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
