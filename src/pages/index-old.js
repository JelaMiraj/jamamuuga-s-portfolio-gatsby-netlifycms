import React from "react"
import PropTypes from "prop-types"
// import {Link, graphql} from 'gatsby'
import {graphql} from "gatsby"
// import Button from '@material-ui/core/Button'
// import Grid from '@material-ui/core/Grid'
// import Avatar from '@material-ui/core/Avatar'
// import {Gift} from 'mdi-material-ui'
import {withStyles} from "@material-ui/core/styles"
import withRoot from "../utils/withRoot"
import Layout from "../components/Layout"
import Link from "../components/Link"
// import Card from '../components/Card'
// import Carousel from '../components/Carousel'
import mytheme from "../styles/themes/theme"
// FIXME: Somehow refer to color names from style variables instead of repeating here.
// FIXME: Many page links broken using current setup.

class IndexPage extends React.Component {
  render() {
    const {data} = this.props
    const {edges: posts} = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            {posts.map(({node: post}) => (
              <div
                className="content"
                style={{border: "1px solid #333", padding: "2em 4em"}}
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
      filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

// FIXME: Somehow, trying to use withStyles this way fails
export default withRoot(withStyles(mytheme)(IndexPage))
// export default withRoot(IndexPage)
