// import React, {Component} from "react"
// import Typography from "@material-ui/core"
// import styled from "@material-ui/styles"
// // Originally from: https://github.com/danielmahon/gatsby-starter-procyon/blob/netlifycms/src/components/Content.js

// const StyledTypography = styled(Typography)(theme => ({
//   "& img": {
//     maxWidth: "100%",
//   },
// }))

// class Content extends Component {
//   render() {
//     const {content, ...props} = this.props

//     // Set prop defaults
//     props.component = props.component || "div"

//     if (React.isValidElement(content)) {
//       return <StyledTypography {...props}>{content}</StyledTypography>
//     }

//     return (
//       <StyledTypography
//         {...props}
//         dangerouslySetInnerHTML={{__html: content}}
//       />
//     )
//   }
// }

// export default Content
