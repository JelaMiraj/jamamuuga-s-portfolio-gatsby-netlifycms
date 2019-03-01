// See https://github.com/mui-org/material-ui/tree/next/examples/gatsby-next
import React from 'react'
import MuiLink from '@material-ui/core/Link'
import {Link as GatsbyLink} from 'gatsby'
// TODO: What is the difference between Link from gatsby and gatsby-link.

function Link(props) {
  return <MuiLink component={GatsbyLink} {...props} />
}

export default Link
