// import React from "react"
// import {graphql} from "gatsby"
// import {List, Page, SEO} from "../components"

// const Portfolio = props => {
//   const portfolio = props.data.allMarkdownRemark.edges

//   return (
//     <Page title="Portfolio">
//       <SEO title="Portfolio" />
//       <List items={portfolio} />
//     </Page>
//   )
// }

// export const query = graphql`
//   query PortfolioQuery {
//     allMarkdownRemark(
//       filter: {fileAbsolutePath: {regex: "/portfolio/"}}
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

// export default Portfolio
