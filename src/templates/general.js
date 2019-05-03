// import React from "react"
// import PropTypes from "prop-types"
// import {graphql, withPrefix} from "gatsby"
// import {CardContent, CardMedia, Typography} from "@material-ui/core"
// import {withStyles} from "@material-ui/styles"
// import {Card, Layout} from "../components"
// import withRoot from "../tools/withRoot"

// const styles = {
//   cardMedia: {
//     height: "200px",
//   },
// }

// const Detail = ({classes, data}) => {
//   const {
//     title,
//     image: {publicURL},
//   } = data.markdownRemark.frontmatter
//   const {html} = data.markdownRemark

//   return (
//     <Layout>
//       {/* <SEO title={title} /> */}
//       <Card>
//         <CardMedia
//           className={classes.cardMedia}
//           image={withPrefix(publicURL)}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h2" component="h2">
//             {title}
//           </Typography>
//           <Typography dangerouslySetInnerHTML={{__html: html}} />
//         </CardContent>
//       </Card>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query($id: String!) {
//     markdownRemark(id: {eq: $id}) {
//       frontmatter {
//         image {
//           publicURL
//         }
//         title
//         path
//       }
//       html
//     }
//   }
// `

// export default withRoot(withStyles(styles)(Detail))
