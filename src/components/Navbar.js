import React, {Component} from "react"
import {Button, IconButton} from "@material-ui/core"
// import {Container} from "@material-ui"
import {unstable_Box as Box} from "@material-ui/core/Box"
import {GithubCircle} from "mdi-material-ui"
import {Link, LinkExternal, PreviewCompatibleImage as Image} from "."
import logo from "../img/logo.svg"
// TODO: Convert to extending or using Material UI's Navbar.
import NavbarStyle from "../styles/components/navbar-style"

class Navbar extends Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0,
    )
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const {target} = el.dataset
          const $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active")
          $target.classList.toggle("is-active")
        })
      })
    }
  }

  render() {
    return (
      <NavbarStyle>
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
              <div className="navbar-burger burger" data-target="navMenu">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div id="navMenu" className="navbar-menu">
              <div className="navbar-start has-text-centered">
                <Link className="navbar-item" to="/about">
                  About
                </Link>
                <Link className="navbar-item" to="/products">
                  Products
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
                  href="https://github.com/Jamamuuga/jamamuuga-s-portfolio-gatsby-netlifycms"
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
      </NavbarStyle>
    )
  }
}

export default Navbar
export {Navbar}
