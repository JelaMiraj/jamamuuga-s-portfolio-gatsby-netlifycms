import React from "react"
import ReactHelmet from "react-helmet"
import {StaticQuery, graphql} from "gatsby"
// import {withStyles} from "@material-ui/core/styles"
import PropTypes from "prop-types"

// TODO: Maybe use destructuring assignment with properties.
const Helmet = props => (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      const title = props.title || data.site.siteMetadata.title
      const description =
        props.description || data.site.siteMetadata.description

      return (
        <ReactHelmet
          htmlAttributes={{
            lang: "en",
          }}
          title={title}
          titleTemplate={`%s - ${title}`}
        >
          <meta name="description" content={description} />

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
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
          <meta
            name="viewport"
            content="minimum-scale=1,
            initial-scale=1,
            width=device-width,
            shrink-to-fit=no"
          />
          {props.children}
        </ReactHelmet>
      )
    }}
  />
)

Helmet.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object,
}

Helmet.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
}

const detailsQuery = graphql`
  query DefaultHelmetQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

// export default withStyles(Helmet)
export default Helmet
