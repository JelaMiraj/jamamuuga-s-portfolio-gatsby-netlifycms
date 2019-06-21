// import React from "react"
// import {graphql} from "gatsby"
// import PropTypes from "prop-types"
// import {Avatar, Button, Grid} from "@material-ui/core"
// import {Gift} from "mdi-material-ui"
// import {withStyles} from "@material-ui/core/styles"
// import {Card, Carousel, HomeFeatures, Link, Page, SEO} from "../components"

// const styles = theme => ({
//   root: {
//     backgroundColor: "#9c27b0",
//   },
// })

// const Home = props => (
//   // const portfolio = props.data.allMarkdownRemark.edges

//   <Page title="Gatsby Material UI Business Starter">
//     <SEO title="Home">
//       <meta
//         name="description"
//         content="Beautiful Gatsby Material UI Business Starter. Tiny code. Well organized. Ready to customize and go."
//       />
//     </SEO>

//     <HomeFeatures />
//     <Grid
//       spacing={3}
//       container
//       direction="row"
//       alignItems="flex-start"
//       justify="center"
//     >
//       {/*
//         <Grid item xs={12} md={10} style={{minHeight: "523px"}}>
//           <Card
//             title="My Portfolio"
//             avatar={
//               <Avatar>
//                 <Gift />
//               </Avatar>
//             }
//             action={
//               <>
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   className={props.classes.root}
//                 >
//                   <Link to="/portfolio">View All Portfolio</Link>
//                 </Button>
//               </>
//             }
//           >
//             <Carousel items={portfolio} />
//           </Card>
//         </Grid>
//         */}
//     </Grid>
//   </Page>
// )

// // export const query = graphql`
// //   query {
// //     allMarkdownRemark(
// //       filter: {fileAbsolutePath: {regex: "/portfolio/"}}
// //       sort: {fields: [frontmatter___date], order: DESC}
// //     ) {
// //       edges {
// //         node {
// //           id
// //           frontmatter {
// //             path
// //             title
// //             date(formatString: "DD MMMM YYYY")
// //             image
// //           }
// //           excerpt
// //         }
// //       }
// //     }
// //   }
// // `

// Home.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

// export default withStyles(styles)(Home)
