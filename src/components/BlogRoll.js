import React from "react"
import PropTypes from "prop-types"
// import {Link, graphql, StaticQuery} from 'gatsby'
import {graphql, StaticQuery} from "gatsby"
import {Button, Grid, Paper, Typography} from "@material-ui/core"
import Link from "./Link"

class BlogRoll extends React.Component {
  render() {
    const {data} = this.props
    const {edges: posts} = data.allMarkdownRemark

    return (
      <Grid container className="columns is-multiline">
        {posts &&
          posts.map(({node: post}) => (
            <Grid item xs={6} className="is-parent column is-6" key={post.id}>
              <Paper>
                <article className="tile is-child box notification">
                  <Typography paragraph>
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span>
                  </Typography>
                  <Typography paragraph>
                    {post.excerpt}
                    <br />
                    <br />
                    <Button variant="contained" color="secondary">
                      <Link className="button" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </Button>
                  </Typography>
                </article>
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
