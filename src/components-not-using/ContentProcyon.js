// import React from "react"
// import {makeStyles, Typography} from "@material-ui/core"
// // Originally from: https://github.com/danielmahon/gatsby-starter-procyon/blob/netlifycms/src/components/Content.js

// const useStyles = makeStyles({
//   typography: {
//     "& img": {
//       maxWidth: "100%",
//     },
//   }
// })

// const Content = props => {
//   const {content, ...props} = props
//   const classes = useStyles(props)

//   // Set prop defaults
//   props.component = props.component || "div"

//   if (React.isValidElement(content)) {
//     return <Typography className={classes.typography} {...props}>{content}</Typography>
//   }

//   return (
//     <Typography className={classes.typography}
//       {...props}
//       dangerouslySetInnerHTML={{__html: content}}
//     />
//   )
// }

// export default Content
