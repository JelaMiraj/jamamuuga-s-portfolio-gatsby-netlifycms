import React from "react"
import {Link as MuiLink} from "@material-ui/core"
// import {Link as GatsbyLink} from "gatsby"
// import Link from "./Link"
// TODO: Maybe handle this using a custom property on regular custom Link component instead.
// TODO: Maybe figure out some kind of open in new window indicator.

function LinkExternal(props) {
  return <MuiLink target="_blank" rel="noopener" {...props} />
}

export default LinkExternal
// export {LinkExternal}
