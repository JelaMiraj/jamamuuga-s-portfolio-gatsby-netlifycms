// // Another helper tool somehow made it possible to put this at bottom instead of top & need eslint disable line.
// // eslint-disable-next-line
// import withRoot from "../tools/withRoot"
// // eslint-disable-next-line
// import React from "react"
// import {graphql, withPrefix} from "gatsby"
// import {Grid, Paper, Typography} from "@material-ui/core"
// import {withStyles} from "@material-ui/styles"
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
//           spacing={24}
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

// // const TeamWrapped = withRoot(withStyles(styles)(Team))

// // export default TeamWrapped
// export default withRoot(withStyles(styles)(Team))
// // export {TeamWrapped as Team}
