import React, {Component} from "react"
import PropTypes from "prop-types"
import {graphql, StaticQuery} from "gatsby"
// TODO: Use CardContent & CardAction as well.
import {Button, Grid, Paper, Typography} from "@material-ui/core"
import {Card, Link} from "."

class BlogRoll extends Component {
  render() {
    const {data} = this.props
    const {edges: posts} = data.allMarkdownRemark

    return (
      <Grid container wrap="wrap">
        {posts &&
          posts.map(({node: post}) => (
            <Grid item xs={6} key={post.id}>
              <Card component="article">
                <Typography component="div" paragraph>
                  <Link variant="h2" fontSize="fontSize4" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <Typography inline> &bull; </Typography>
                  <Typography
                    variant="h3"
                    fontSize="fontSize5"
                    className="subtitle"
                  >
                    {post.frontmatter.date}
                  </Typography>
                </Typography>
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
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

const BlogRollQuery = () => (
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
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)

export default BlogRollQuery
export {BlogRollQuery as BlogRoll}
