// import React from "react"
// import {graphql, withPrefix} from "gatsby"
// import {Grid, Paper, Typography} from "@material-ui/core"
// import {makeStyles} from "@material-ui/core/styles"
// import {Helmet, PreviewCompatibleImage as Image, Layout} from "../components"
// // TODO: Maybe use Card instead of or around Paper.

// const useStyles = makeStyles({
//   paper: {
//     padding: "25px",
//   },
//   image: {
//     width: "100%",
//   },
// })

// const Team = ({data}) => {
//   const classes = useStyles()
//   const {
//     title,
//     image: {publicURL},
//     jobtitle,
//   } = data.markdownRemark.frontmatter
//   const {html} = data.markdownRemark

//   return (
//     <Layout>
//       <Helmet title={title} />
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
//             <Typography gutterBottom variant="h2">
//               {title}
//             </Typography>
//             <Typography gutterBottom variant="h5">
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

// export default Team
// // export {Team}
