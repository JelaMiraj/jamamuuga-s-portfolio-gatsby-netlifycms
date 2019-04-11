import React from "react"
import PropTypes from "prop-types"
// import {Link, graphql, StaticQuery} from "gatsby"
import {graphql, StaticQuery} from "gatsby"
import {Button, Grid, Paper, Typography} from "@material-ui/core"
import Link from "./Link"

class BlogRoll extends React.Component {
  render() {
    const {data} = this.props
    const {edges: posts} = data.allMarkdownRemark

    return (
      <Grid container wrap="wrap">
        {posts &&
          posts.map(({node: post}) => (
            <Grid item xs={6} key={post.id}>
              <Paper component="article">
                <Typography component="div" paragraph>
                  <Link variant="h2" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <Typography inline> &bull; </Typography>
                  <Typography variant="h3">{post.frontmatter.date}</Typography>
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
              </Paper>
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
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
