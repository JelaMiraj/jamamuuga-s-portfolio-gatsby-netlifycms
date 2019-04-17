import React, {Component} from "react"
import {Box, Button, IconButton} from "@material-ui/core"
// import {Container} from "@material-ui/core"
import {GithubCircle} from "mdi-material-ui"
import {Link, LinkExternal, PreviewCompatibleImage as Image} from "."
import logo from "../img/logo.svg"

class Navbar extends Component {
  // TODO: Use Babel Plugin Proposal Class Properties instead of constructor.
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            })
      },
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <Box px={[2, 3, 4]} mx="auto" maxWidth={1280} className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <Image src={logo} alt="Kaldi" style={{width: "88px"}} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <LinkExternal
                className="navbar-item"
                href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
              >
                {/*
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              */}
                <IconButton className="icon" style={{color: "#fff"}}>
                  <GithubCircle />
                </IconButton>
              </LinkExternal>
            </div>
          </div>
        </Box>
      </nav>
    )
  }
}

export default Navbar
export {Navbar as NavbarBaseNew}
