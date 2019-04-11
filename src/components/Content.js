import React from "react"
import PropTypes from "prop-types"
import {unstable_Box as Box} from "@material-ui/core/Box"
import ContentStyle from "../styles/components/content-style"

// TODO: Should we use an alternative to dangerouslySetInnerHTML?
export const HTMLContent = ({content, className}) => (
  <ContentStyle>
    <Box
      component="div"
      className={className}
      dangerouslySetInnerHTML={{__html: content}}
    />
  </ContentStyle>
)

const Content = ({content, className}) => (
  <ContentStyle>
    <Box component="div" className={className}>
      {content}
    </Box>
  </ContentStyle>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
