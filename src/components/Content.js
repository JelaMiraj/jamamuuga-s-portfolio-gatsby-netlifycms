import React from 'react'
import PropTypes from 'prop-types'
import ContentStyle from '../styles/components/content-style'

// TODO: Should we use an alternative to dangerouslySetInnerHTML?
export const HTMLContent = ({content, className}) => (
  <ContentStyle>
    <div className={className} dangerouslySetInnerHTML={{__html: content}} />
  </ContentStyle>
)

const Content = ({content, className}) => (
  <ContentStyle>
    <div className={className}>{content}</div>
  </ContentStyle>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
