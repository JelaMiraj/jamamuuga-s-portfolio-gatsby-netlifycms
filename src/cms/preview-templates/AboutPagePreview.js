import React from "react"
import PropTypes from "prop-types"
import {AboutPageTemplate} from "../../templates/about-page"
// TODO: Does Netlify CMS preview pages need withRoot util too?

const AboutPagePreview = ({entry, widgetFor}) => (
  <AboutPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
