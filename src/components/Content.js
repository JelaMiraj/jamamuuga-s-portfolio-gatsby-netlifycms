import React from 'react'
import PropTypes from 'prop-types'
import contentStyle from '../styles/components/content-style'

// TODO: Should we use an alternative to dangerouslySetInnerHTML?
export const HTMLContent = ({content, className}) => (
  <contentStyle>
    <div className={className} dangerouslySetInnerHTML={{__html: content}} />
  </contentStyle>
)

const Content = ({content, className}) => (
  <contentStyle>
    <div className={className}>{content}</div>
  </contentStyle>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
