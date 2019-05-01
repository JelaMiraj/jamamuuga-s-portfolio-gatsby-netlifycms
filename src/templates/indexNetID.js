// // eslint-disable-next-line
// import withRoot from "../tools/withRoot"
// // eslint-disable-next-line
// import React, {Component} from "react"
// import PropTypes from "prop-types"
// import {Typography} from "@material-ui/core"
// // import {Container} from "@material-ui/core"
// import {unstable_Box as Box} from "@material-ui/core/Box"
// import {graphql} from "gatsby"
// // include NLI ...to init first
// import netlifyIdentity from "netlify-identity-widget"
// // import BasePage from "../base/BasePage"
// import {Page, Pagination, PostItem} from "../components"
// import {isLoggedIn} from "../services/auth"

// // Init netlify identity ...
// // FIX for build test @2018/12/13
// if (typeof netlifyIdentity.init !== `undefined`) {netlifyIdentity.init()}

// export default class IndexPage extends Component {
//   render() {
//     const posts = this.props.data.allMarkdownRemark.edges
//     const {currentPage, numPages} = this.props.pageContext
//     const logged = isLoggedIn()

//     return (
//       <BasePage location={{pathname: "/"}}>
//         <Box component="section">
//           <Box px={[2, 3, 4]} mx="auto" maxWidth={1280} className="container">
//             <Box className="hide-in-mobile">
//               <Typography variant="h1" fontWeight="fontWeightBold" fontSize="fontSize3">Latest</Typography>
//             </Box>
//             {posts.map(({node: post}) => (
//               <PostItem post={post} logged={logged} />
//             ))}
//           </Box>
//         </Box>
//         {/** pagination row */}
//         <Box component="section">
//           <Pagination currentPage={currentPage} numPages={numPages} />
//         </Box>
//       </BasePage>
//     )
//   }
// }

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// }

// export const pageQuery = graphql`
//   query HomeQuery($skip: Int!, $limit: Int!) {
//     allMarkdownRemark(
//       sort: {order: DESC, fields: [frontmatter___date]}
//       filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
//       limit: $limit
//       skip: $skip
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 100)
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             templateKey
//             date(formatString: "MMMM DD, YYYY")

//             image {
//               childImageSharp {
//                 fluid(maxWidth: 160, quality: 64) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
