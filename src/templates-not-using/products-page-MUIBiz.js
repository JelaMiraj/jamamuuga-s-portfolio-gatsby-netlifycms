// // // eslint-disable-next-line
// // import {withRoot} from "../tools"
// // // eslint-disable-next-line
// import React from "react"
// import {graphql} from "gatsby"
// import {List, Page, SEO} from "../components"

// const Products = props => {
//   const products = props.data.allMarkdownRemark.edges

//   return (
//     <Page title="Products">
//       <SEO title="Products" />
//       <List items={products} />
//     </Page>
//   )
// }

// export const query = graphql`
//   query ProductsQuery {
//     allMarkdownRemark(
//       filter: {fileAbsolutePath: {regex: "/products/"}}
//       sort: {fields: [frontmatter___date], order: DESC}
//     ) {
//       edges {
//         node {
//           excerpt
//           frontmatter {
//             image {
//               publicURL
//             }
//             title
//             path
//           }
//         }
//       }
//     }
//   }
// `

// // export default withRoot(Products)
// export default Products
