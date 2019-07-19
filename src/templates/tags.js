import React from "react"
import {graphql} from "gatsby"
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {Helmet, Layout, Link} from "../components"

const useStyles = makeStyles({
  root: {},
})

const TagRoute = props => {
  const classes = useStyles(props)
  const posts = props.data.allMarkdownRemark.edges
  const postLinks = posts.map(post => (
    <ListItem key={post.node.fields.slug}>
      <ListItemText>
        <Link to={post.node.fields.slug}>
          <Typography variant="h2" className="is-size-2">
            {post.node.frontmatter.title}
          </Typography>
        </Link>
      </ListItemText>
    </ListItem>
  ))
  const {tag} = props.pageContext
  const {title} = props.data.site.siteMetadata
  const {totalCount} = props.data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with “${tag}”`

  return (
    <Layout>
      <section className="section">
        <Helmet title={`${tag} | ${title}`} />
        <Container className="container content">
          <div className="content">
            <Grid container className="columns">
              <Grid
                item
                xs={10}
                className="column is-10 is-offset-1"
                style={{marginBottom: "6rem"}}
              >
                <Typography
                  variant="h3"
                  fontWeight="fontWeightSemiBold"
                  className="title is-size-4 is-bold-light"
                >
                  {tagHeader}
                </Typography>
                <List className="taglist">{postLinks}</List>
                <Typography component="p">
                  <Link to="/tags/">Browse all tags</Link>
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export const tagPageQuery = graphql`
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

export default TagRoute
