// import React, {Component} from "react"
// import {Grid, Typography} from "@material-ui/core"
// import {makeStyles} from "@material-ui/core/styles"
// import {Footer, Header} from "."
// // import "../css/style.styl"

// const useStyles = makeStyles({
//   container: {
//     marginTop: 94,
//   },
//   contentBox: {
//     maxWidth: "calc(1136px - 60px)",
//     width: "calc(100% - 60px)",
//   },
//   title: {
//     textAlign: "center"
//   }
// })

// const Page = props => {
//   const classes = useStyles(props)
//   const {title, children} = props

//   return (
//     <>
//       <Header />
//       <Grid
//         className={classes.container}
//         container
//         direction="row"
//         justify="center"
//       >
//         <Grid
//           className={classes.contentBox}
//           item
//         >
//           {title ? (
//             <Typography
//               className={classes.title}
//               variant="h2"
//               gutterBottom
//             >
//               {title}
//             </Typography>
//           ) : null}
//           {children}
//           <Footer />
//         </Grid>
//       </Grid>
//     </>
//   )
// }

// export default Page
// // export {Page}
