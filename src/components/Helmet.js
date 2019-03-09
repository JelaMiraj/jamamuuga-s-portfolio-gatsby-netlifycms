import React from 'react'
import ReactHelmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
// import {withTheme} from 'styled-components'
// import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'

// TODO: Actually port the header over.
// TODO: Make sure this still works with Material UI's style system instead of styled-components directly.
// const Helmet = ({Theme = {}})
// const Helmet = ({theme = {}}) => (
const Helmet = props => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <ReactHelmet>
        <html lang="en" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
        <meta
          name="viewport"
          content="minimum-scale=1,
            initial-scale=1,
            width=device-width,
            shrink-to-fit=no"
        />
      </ReactHelmet>
    )}
  />
)

Helmet.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object,
}

// export default withStyles(Helmet)
export default Helmet
