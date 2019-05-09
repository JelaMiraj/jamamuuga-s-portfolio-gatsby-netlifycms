import React from "react"
import Link from "./Link"
// TODO: Handle this using a custom property on regular custom Link component instead.

function LinkExternal(props) {
  return <Link {...props} target="_blank" rel="noopener noreferrer" />
}

export default LinkExternal
// export {LinkExternal}
