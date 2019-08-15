// import React, {useState} from "react"
import React from "react"
import {StaticQuery, graphql} from "gatsby"
import {IconButton, makeStyles, Menu, MenuItem} from "@material-ui/core"
import {DotsVertical} from "mdi-material-ui"
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks"
import {Link, LinkExternal} from "."
// import logo from "../images/logo.svg"

const useStyles = makeStyles({
  dotsVerticalIcon: {
    color: "#efefef",
  },
})

const MenuMobile = props => {
  const popupState = usePopupState({
    // variant: 'popover',
    // popupId: 'MenuMobilePopover',
  })

  // const [state, setState] = useState({
  //   anchorEl: null,
  // })

  // const handleOpen = event => {
  //   setState({anchorEl: event.currentTarget})
  // }

  // const handleClose = () => {
  //   setState({anchorEl: null})
  // }

  // const {anchorEl} = state
  const classes = useStyles(props)
  const {
    data: {
      site: {
        siteMetadata: {menuLinks},
      },
    },
  } = props

  return (
    <>
      <IconButton {...bindTrigger(popupState)}>
        <DotsVertical className={classes.dotsVerticalIcon} />
      </IconButton>
      {/* <ClickAwayListener onClickAway={popupState.Close}> */}
      {/* <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        > */}
      <Menu {...bindMenu(popupState)}>
        {menuLinks.map(link => (
          <Link key={link.name} to={link.link}>
            <MenuItem onClick={popupState.close}>{link.name}</MenuItem>
          </Link>
        ))}
        <LinkExternal href="https://github.com/Jamamuuga/jamamuuga-s-portfolio-gatsby-netlifycms">
          <MenuItem onClick={popupState.close}>Github Repository</MenuItem>
        </LinkExternal>
      </Menu>
      {/* </ClickAwayListener> */}
    </>
  )
}

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
    render={data => <MenuMobile active={props.active} data={data} />}
  />
)
