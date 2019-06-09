// import React from "react"
// import {graphql, withPrefix} from "gatsby"
// import {Grid, Paper, Typography} from "@material-ui/core"
// import {withStyles} from "@material-ui/core/styles"
// import {PreviewCompatibleImage as Image, Layout} from "../components"

// const styles = {
//   paper: {
//     padding: "25px",
//   },
//   image: {
//     width: "100%",
//   },
// }

// const Team = ({classes, data}) => {
//   const {
//     title,
//     image: {publicURL},
//     jobtitle,
//   } = data.markdownRemark.frontmatter
//   const {html} = data.markdownRemark

//   return (
//     <Layout>
//       {/* <SEO title={title} /> */}
//       <Paper className={classes.paper}>
//         <Grid
//           spacing={3}
//           container
//           direction="row"
//           alignItems="flex-start"
//           justify="center"
//         >
//           <Grid item xs={12} md={4}>
//             {/* FIXME: Switch to a preview compatible image component. */}
//             <img className={classes.image} src={withPrefix(publicURL)} alt="" />
//           </Grid>
//           <Grid item xs={12} md={8}>
//             <Typography gutterBottom variant="h2" component="h2">
//               {title}
//             </Typography>
//             <Typography gutterBottom variant="h5" component="h5">
//               {jobtitle}
//             </Typography>
//             <Typography dangerouslySetInnerHTML={{__html: html}} />
//           </Grid>
//         </Grid>
//       </Paper>
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
//         jobtitle
//       }
//       html
//     }
//   }
// `

// export default withStyles(styles)(Team)
// // export {Team}
