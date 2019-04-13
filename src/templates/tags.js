// eslint-disable-next-line
import withRoot from "../tools/withRoot"
// eslint-disable-next-line
import React, {Component} from "react"
import {graphql} from "gatsby"
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import Helmet from "../components/Helmet"
import Layout from "../components/Layout"
import Link from "../components/Link"

class TagRoute extends Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <ListItem key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <Typography variant="h2" fontSize="fontSize2">
            {post.node.frontmatter.title}
          </Typography>
        </Link>
      </ListItem>
    ))
    const {tag} = this.props.pageContext
    const {title} = this.props.data.site.siteMetadata
    const {totalCount} = this.props.data.allMarkdownRemark
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`

    return (
      <Layout>
        <Box component="section">
          <Helmet title={`${tag} | ${title}`} />
          <Container>
            <Grid container>
              <Grid
                item
                xs={10}
                className="is-offset-1"
                style={{marginBottom: "6rem"}}
              >
                <Typography
                  variant="h3"
                  fontSize="fontSize4"
                  fontWeight="fontWeightSemiBold"
                  className="title"
                >
                  {tagHeader}
                </Typography>
                <List className="taglist">{postLinks}</List>
                <Typography paragraph>
                  <Link to="/tags/">Browse all tags</Link>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Layout>
    )
  }
}

const TagRouteWrapped = withRoot(TagRoute)

const TagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {tags: {in: [$tag]}}}
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default TagRouteWrapped
export {TagRouteWrapped as Tags, TagPageQuery}
