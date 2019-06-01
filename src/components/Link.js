// See https://github.com/mui-org/material-ui/tree/master/examples/gatsby
import React from "react"
import {Link as MuiLink} from "@material-ui/core"
import {Link as GatsbyLink} from "gatsby"

function Link(props) {
  return <MuiLink component={GatsbyLink} {...props} />
}

export default Link
