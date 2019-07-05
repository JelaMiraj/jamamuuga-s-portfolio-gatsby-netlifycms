// import React from "react"
// import PropTypes from "prop-types"
// import {Box, Container as MuiContainer} from "@material-ui/core"
// import {makeStyles} from "@material-ui/core/styles"

// const useStyles = makeStyles({
//   container: {
//     // FIXME: Evidently, this is the wrong way to do this with the hooks api of Material UI Styles.
//     // "max-width": ${props => props.maxWidth},
//   },
// })

// // Container.defaultProps = {
// //   mx: "auto",
// //   maxWidth: "700px",
// // }

// // const Container = ({children, attributes}) => {
// const Container = props => {
//   const classes = props.classes
//   const attributes = props.attributes
//   const children = props.children

//   return (
//     <MuiContainer px={[2, 3, 4]} mx="auto" className={classes.container}>
//       {/* Old Version also had maxWidth={1280} Container Attribute */}
//       {children}
//     </MuiContainer>
//   )
// }

// Container.propTypes = {
//   // children: PropTypes.node,
//   // FIXME: This next line might be wrong.
//   // attributes: PropTypes.string,
//   // maxWidth: PropTypes.oneOfType([
//   //   PropTypes.number,
//   //   PropTypes.string,
//   //   PropTypes.array,
//   // ]),
// }

// // FIXME: This next line might be wrong.
// // Container.propTypes = MuiContainer.propTypes

// export default Container
// // export {Container}
