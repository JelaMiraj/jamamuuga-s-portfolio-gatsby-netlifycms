// // eslint-disable-next-line
// import {withRoot} from "../tools"
// // eslint-disable-next-line
// import React from "react"
// import {graphql, Link} from "gatsby"
// import PropTypes from "prop-types"
// import {Avatar, Button} from "@material-ui/core"
// import {Gift} from "mdi-material-ui"
// import {withStyles} from "@material-ui/core/styles"
// import {Card, Carousel, HomeFeatures, Page, SEO} from "../components"

// const styles = theme => ({
//     root: {
//       fontWeight: "bold",
//     },
// })

// const Home = props => {
//   const products = props.data.allMarkdownRemark.edges

//   return (
//     <Page title="Gatsby Material UI Business Starter">
//       <SEO title="Home">
//         <meta
//           name="description"
//           content="Beautiful Gatsby Material UI Business Starter. Tiny code. Well organized. Ready to customize and go."
//         />
//       </SEO>

//       <HomeFeatures />
//       <Card
//         title="Our Products"
//         avatar={
//           <Avatar>
//             <Gift />
//           </Avatar>
//         }
//         action={
//           <Button
//             variant="contained"
//             color="secondary"
//             className={props.classes.root}
//             component={Link}
//             to="/products"
//           >
//             View All Products
//           </Button>
//         }
//         style={{ minHeight: 523 }}
//       >
//         <Carousel items={products} />
//       </Card>
//     </Page>
//   )
// }

// export const query = graphql`
//   query {
//     allFile(filter: {extension: {eq: "jpg"}}) {
//       edges {
//         node {
//           publicURL
//         }
//       }
//     }
//     allMarkdownRemark(
//       filter: {fileAbsolutePath: {regex: "/products/"}}
//       sort: {fields: [frontmatter___date], order: DESC}
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             image {
//               publicURL
//             }
//             path
//             title
//             date(formatString: "DD MMMM YYYY")
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `

// Home.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

// export default withRoot(withStyles(styles)(Home))
