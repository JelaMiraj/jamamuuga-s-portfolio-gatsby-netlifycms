// import React from "react"
// // import {Grid, Row, Col} from "react-flexbox-grid"
// import PropTypes from "prop-types"
// // import {MUIThemeProvider, withStyles} from "@material-ui/core/styles"
// import Paper from "@material-ui/core/Paper"
// import Grid from "@material-ui/core/Grid"
// import Typography from "@material-ui/core/Typography"
// import Header from "./Header"
// import Footer from "./Footer"
// // import theme from "../styles/themes/theme"
// // TODO: Using MUIThemeProvider & styling here might not be the right thing with Material UI. Probably best to add theme only from the page level & not this layout level.
// // FIXME: using MUIThemeProvider here breaks things...

// class Page extends React.Component {
//   render() {
//     const {title, children} = this.props

//     return (
//       <>
//         {/* <MUIThemeProvider theme={theme}> */}
//         <Header />
//         <Grid container style={{marginTop: "94px"}}>
//           <Grid item container direction="row">
//             <Grid item container direction="column" xs={12}>
//               {title ? (
//                 <Typography
//                   variant="h2"
//                   gutterBottom
//                   style={{textAlign: "center"}}
//                 >
//                   {title}
//                 </Typography>
//               ) : null}
//               {children}
//               <Footer />
//             </Grid>
//           </Grid>
//         </Grid>
//         {/* </MUIThemeProvider> */}
//       </>
//     )
//   }
// }

// export default Page
