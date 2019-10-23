import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import { Card, Grid, Typography } from "@material-ui/core"
import { Button } from "gatsby-theme-material-ui"
// TODO: Fix card usage so underlying Material UI Card subcomponents like CardAction are actually used.
import { Link, PreviewCompatibleImage } from "."

const BlogRoll = props => {
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Grid container wrap="wrap">
      {posts &&
        posts.map(({ node: post }) => (
          <Grid item xs={6} key={post.id}>
            <Card
              component="article"
              className={`blog-list-item tile is-child box notification ${
                post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
            >
              <header>
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.title}`,
                      }}
                    />
                  </div>
                ) : null}
                <Typography component="div" paragraph className="post-meta">
                  <Link
                    variant="h5"
                    className="title has-text-primary"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <Typography display="inline"> &bull; </Typography>
                  <Typography variant="h6" className="subtitle is-block">
                    {post.frontmatter.date}
                  </Typography>
                </Typography>
              </header>
              <Typography paragraph>
                {post.excerpt}
                <br />
                <br />
                <Link to={post.fields.slug}>
                  <Button variant="contained" color="secondary">
                    Keep Reading →
                  </Button>
                </Link>
              </Typography>
            </Card>
          </Grid>
        ))}
    </Grid>
  )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
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
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
