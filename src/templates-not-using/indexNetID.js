// import React from "react"
// import PropTypes from "prop-types"
// import { graphql } from "gatsby"
// import { Container, Typography } from "@material-ui/core"
// import styled from "styled-components/macro"
// // include NLI ...to init first
// import netlifyIdentity from "netlify-identity-widget"
// import BasePage from "../base/BasePage"
// import { Content, Pagination, PostItem } from "../components"
// import { isLoggedIn } from "../services/auth"

// const StyledTypography = styled(Typography)`
//   font-weight: ${props => props.theme.typography.fontWeightBold};
// `

// // Init netlify identity ...
// // FIX for build test @2018/12/13
// if (typeof netlifyIdentity.init !== `undefined`) netlifyIdentity.init()

// const IndexPage = props => {
//   const { classes } = props
//   const posts = this.props.data.allMarkdownRemark.edges
//   const { currentPage, numPages } = this.props.pageContext
//   const logged = isLoggedIn()

//   return (
//     <BasePage location={{ pathname: "/" }}>
//       <section className="section">
//         <Container className={classes.container}>
//           <div className="content hide-in-mobile">
//             <StyledTypography variant="h4">
//               Latest
//             </StyledTypography>
//           </div>
//           {posts.map(({ node: post }) => (
//             <PostItem post={post} logged={logged} />
//           ))}
//         </Container>
//       </section>
//       {/** pagination row */}
//       <section className="section">
//         <Pagination currentPage={currentPage} numPages={numPages} />
//       </section>
//     </BasePage>
//   )
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

// export default IndexPage
