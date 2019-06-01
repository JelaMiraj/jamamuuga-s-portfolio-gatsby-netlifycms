import React, {Component} from "react"
import {StaticQuery, graphql} from "gatsby"
import {ClickAwayListener, IconButton, Menu, MenuItem} from "@material-ui/core"
import {DotsVertical} from "mdi-material-ui"
import {withStyles} from "@material-ui/core/styles"
import {Link} from "."
// import logo from "../img/logo.svg"

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
