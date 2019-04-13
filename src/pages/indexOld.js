// eslint-disable-next-line
import withRoot from "../tools/withRoot"
// eslint-disable-next-line
import React, {Component} from "react"
import PropTypes from "prop-types"
import {Button, Container, Typography} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Link from "../components/Link"
// import Card from "../components/Card"
// import Carousel from "../components/Carousel"

class IndexPage extends Component {
  render() {
    const {data} = this.props
    const {edges: posts} = data.allMarkdownRemark

    return (
      <Layout>
        <Box component="section">
          <Container>
            <Box>
              <Typography
                variant="h1"
                fontWeight="fontWeightBold"
                fontSize="fontSize2"
              >
                Latest Stories
              </Typography>
            </Box>
            {posts.map(({node: post}) => (
              <Box
                style={{border: "1px solid #333", padding: "2em 4em"}}
                key={post.id}
              >
                <Typography paragraph>
                  <Link color="textPrimary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <Typography component="span"> &bull; </Typography>
                  <Topography component="small">
                    {post.frontmatter.date}
                  </Topography>
                </Typography>
                <Typography paragraph>
                  {post.excerpt}
                  <br />
                  <br />
                  <Button size="small" variant="contained">
                    <Link to={post.fields.slug}>Keep Reading →</Link>
                  </Button>
                </Typography>
              </Box>
            ))}
          </Container>
        </Box>
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

const pageQuery = graphql`
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

const IndexPageWrapped = withRoot(IndexPage)

export default IndexPageWrapped
export {IndexPageWrapped as Index, pageQuery}
