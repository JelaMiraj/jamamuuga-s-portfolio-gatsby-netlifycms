// import React from "react"
// import Typography from "@material-ui/core"
// import {styled} from "@material-ui/core/styles"
// // Originally from: https://github.com/danielmahon/gatsby-starter-procyon/blob/netlifycms/src/components/Content.js

// // TODO: Convert from styled api to hooks api. This is complicated by overriding sub element css here.
// const StyledTypography = styled(Typography)(theme => ({
//   "& img": {
//     maxWidth: "100%",
//   },
// }))

// const Content = props => {
//   const {content, ...props} = props

//   // Set prop defaults
//   props.component = props.component || "div"

//   if (React.isValidElement(content)) {
//     return <StyledTypography {...props}>{content}</StyledTypography>
//   }

//   return (
//     <StyledTypography
//       {...props}
//       dangerouslySetInnerHTML={{__html: content}}
//     />
//   )
// }

// export default Content
