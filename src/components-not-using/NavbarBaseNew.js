// import React from "react"
// import {Button, Container, IconButton} from "@material-ui/core"
// import {GithubCircle} from "mdi-material-ui"
// // TODO: Replace "a" anchor links with LinkExternal.
// import {Link, LinkExternal} from "."
// import logo from "../img/logo.svg"
// // TODO: Port anything you want to keep then get rid of this file.

// const Navbar = props => {
//   // FIXME: Need to find alternative to setState method, because probably no more "this." in local function instead of method.

//   const state = {
//       active: false,
//       navBarActiveClass: "",
//     }

//   const toggleHamburger = () => {
//     // toggle the active boolean in the state
//     this.setState(
//       {
//         active: !this.state.active,
//       },
//       // after state has been updated,
//       () => {
//         // set the class in state for the navbar accordingly
//         this.state.active
//           ? this.setState({
//               navBarActiveClass: "is-active",
//             })
//           : this.setState({
//               navBarActiveClass: "",
//             })
//       },
//     )
//   }

//   return (
//     <nav
//       className="navbar is-transparent"
//       role="navigation"
//       aria-label="main-navigation"
//     >
//       <div className="container">
//         <div className="navbar-brand">
//           <Link to="/" className="navbar-item" title="Logo">
//             <img src={logo} alt="Kaldi" style={{width: "88px"}} />
//           </Link>
//           {/* Hamburger menu */}
//           <div
//             className={`navbar-burger burger ${this.state.navBarActiveClass}`}
//             data-target="navMenu"
//             onClick={() => this.toggleHamburger()}
//           >
//             <span />
//             <span />
//             <span />
//           </div>
//         </div>
//         <div
//           id="navMenu"
//           className={`navbar-menu ${this.state.navBarActiveClass}`}
//         >
//           <div className="navbar-start has-text-centered">
//             <Link className="navbar-item" to="/about">
//               About
//             </Link>
//             <Link className="navbar-item" to="/portfolio">
//               Portfolio
//             </Link>
//             <Link className="navbar-item" to="/blog">
//               Blog
//             </Link>
//             <Link className="navbar-item" to="/contact">
//               Contact
//             </Link>
//             <Link className="navbar-item" to="/contact/examples">
//               Form Examples
//             </Link>
//           </div>
//           <div className="navbar-end has-text-centered">
//             <a
//               className="navbar-item"
//               href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {/* <span className="icon">
//                 <img src={github} alt="Github" />
//                 </span> */}
//                             <IconButton className="icon" style={{color: "#fff"}}>
//                 <GithubCircle />
//               </IconButton>

//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar
