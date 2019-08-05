// import React from "react"
// import {StaticQuery, graphql} from "gatsby"
// import {Divider, Hidden, makeStyles, Typography} from "@material-ui/core"

// import logo from "../img/logo.svg"
// import facebook from "../img/social/facebook.svg"
// import instagram from "../img/social/instagram.svg"
// import twitter from "../img/social/twitter.svg"
// import vimeo from "../img/social/vimeo.svg"

// const useStyles = makeStyles({
//   divider: {
//     marginTop: "6",
//     marginBottom: "3",
//   },
//   footer: {
//     marginBottom: "3",
//     whiteSpace: "nowrap",
//   },
// })

// const Footer = props => {
//   const {
//     // classes,
//     data: {
//       site: {
//         siteMetadata: {
//           title,
//           contact: {email, phone},
//         },
//       },
//     },
//   } = props
//   const classes = useStyles(props)

//   return (
//     <>
//       <Divider className={classes.divider} />
//       <footer className={classes.footer} id="footer">
//         <span>
//           <Typography variant="caption" component="span">
//             ©{new Date().getFullYear()} {title}{" "}
//             <Hidden only={["xs", "sm"]}>–</Hidden>
//             <Hidden only={["xl", "lg", "md"]}>
//               <br />
//             </Hidden>{" "}
//             {/* {email} – {phone} */}
//             <br />
//             &middot;
//             <br />
//             By <a href="https://jasoncadydesigns.netlify.com">Jason Cady</a>
//           </Typography>
//         </span>
//       </footer>
//     </>
//   )
// }

// export default props => (
//   <StaticQuery
//     query={graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             contact {
//               email
//               phone
//             }
//           }
//         }
//       }
//     `}
//     render={data => <Footer data={data} />}
//   />
// )
