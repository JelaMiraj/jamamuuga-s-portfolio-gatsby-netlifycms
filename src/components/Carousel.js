// import React from "react"
// import {withPrefix} from "gatsby"
// import {
//   CardContent,
//   CardMedia,
//   Button,
//   MobileStepper,
//   Paper,
//   Typography,
// } from "@material-ui/core"
// import {makeStyles} from "@material-ui/core/styles"
// import {
//   usePopupState,
//   bindTrigger,
//   bindMenu,
// } from "material-ui-popup-state/hooks"
// import SwipeableViews from "react-swipeable-views"
// import {autoPlay} from "react-swipeable-views-utils"
// import {Card, Link} from "."
// // Make sure to use Material UI's Steppers & not just material-ui-popup-state: https://material-ui.com/components/steppers/#mobile-stepper-text-with-carousel-effect

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

// const useStyles = makeStyles({
//   cardMedia: {
//     height: "200px",
//   },
// })

// const Carousel = props => {
//   // TODO: Find alternative to this.setState.
//   // FIXME: Finish porting to function style, material-ui-popup-state/hooks, & Material UI Steppers.

//   const popupState = usePopupState({})

//   const state = {
//     activeStep: 0,
//   }

//   const handleNext = () => {
//     this.setState(prevState => ({
//       activeStep: prevState.activeStep + 1,
//     }))
//   }

//   const handleBack = () => {
//     this.setState(prevState => ({
//       activeStep: prevState.activeStep - 1,
//     }))
//   }

//   const handleStepChange = activeStep => {
//     this.setState({activeStep})
//   }

//   const {activeStep} = state

//   const classes = useStyles(props)
//   const {items} = props

//   const maxSteps = items.length

//   return (
//     <Paper elevation={0}>
//       <div>
//         <Typography>{items[activeStep].title}</Typography>
//         <AutoPlaySwipeableViews
//           axis="x"
//           index={activeStep}
//           onChangeIndex={this.handleStepChange}
//           enableMouseEvents
//         >
//           {items.map((item, index) => {
//             const {
//               node: {
//                 excerpt,
//                 frontmatter: {
//                   path,
//                   title,
//                   image: {publicURL},
//                 },
//               },
//             } = item

//             return (
//               <div key={index}>
//                 {Math.abs(activeStep - index) <= 2 ? (
//                   <Card>
//                     <CardMedia
//                       className={classes.cardMedia}
//                       image={withPrefix(publicURL)}
//                     />
//                     <CardContent>
//                       <Typography gutterBottom variant="h5" component="h2">
//                         <Link to={path}>{title}</Link>
//                       </Typography>
//                       <Typography component="p">{excerpt}</Typography>
//                     </CardContent>
//                   </Card>
//                 ) : null}
//               </div>
//             )
//           })}
//         </AutoPlaySwipeableViews>
//         <MobileStepper
//           steps={maxSteps}
//           position="static"
//           activeStep={activeStep}
//           nextButton={
//             <Button
//               size="small"
//               onClick={this.handleNext}
//               disabled={activeStep === maxSteps - 1}
//             >
//               Next
//             </Button>
//           }
//           backButton={
//             <Button
//               size="small"
//               onClick={this.handleBack}
//               disabled={activeStep === 0}
//             >
//               Back
//             </Button>
//           }
//         />
//       </div>
//     </Paper>
//   )
// }

// export default Carousel
// // export {Carousel}
