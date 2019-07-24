// import React from "react"
// // import {PropTypes} from "prop-types"
// import {graphql, withPrefix} from "gatsby"
// import {CardContent, CardMedia, Typography} from "@material-ui/core"
// import {makeStyles} from "@material-ui/core/styles"
// import {Card, Helmet, Layout} from "../components"

// const useStyles = makeStyles({
//   cardMedia: {
//     height: "200px",
//   },
// })

// const Detail = ({data}) => {
//   const classes = useStyles()
//   const {
//     title,
//     image: {publicURL},
//   } = data.markdownRemark.frontmatter
//   const {html} = data.markdownRemark

//   return (
//     <Layout>
//       <Helmet title={title} />
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

// export default Detail
