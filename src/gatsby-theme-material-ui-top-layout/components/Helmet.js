import React from "react"
import {Helmet as ReactHelmet} from "react-helmet"
import {StaticQuery, graphql} from "gatsby"
import {PropTypes} from "prop-types"

// TODO: Maybe use destructuring assignment with properties.
const Helmet = ({children, title, description}, ...props) => (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      const title = title || data.site.siteMetadata.title
      const description = description || data.site.siteMetadata.description

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
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/images/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/images/favicon-16x16.png"
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href="/images/safari-pinned-tab.svg"
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/images/og-image.jpg" />
          <meta
            name="viewport"
            content="minimum-scale=1,
            initial-scale=1,
            width=device-width,
            shrink-to-fit=no"
          />
          {/* <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
            rel="stylesheet"
          /> */}
          {children}
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

export default Helmet
