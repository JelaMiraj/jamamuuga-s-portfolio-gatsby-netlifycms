import React from "react"
import {graphql} from "gatsby"
import {
  Box,
  Container,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {Helmet, Layout, Link} from "../components"

const useStyles = makeStyles({
  gridContent: {
    marginBottom: "6rem",
  },
  sectionBox: {},
  sectionBoxGradient: {},
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
      <Box component="section" className={classes.sectionBox}>
        <Helmet title={`${tag} | ${title}`} />
        <Container className="content">
          <Box className="content">
            <Grid container>
              <Grid
                item
                md={1}
                implementation="css"
                smDown
                component={Hidden}
              />
              <Grid item xs={10} className={classes.gridContent}>
                <Typography variant="h5" fontWeight="600">
                  {tagHeader}
                </Typography>
                <List className="taglist">{postLinks}</List>
                <Typography paragraph>
                  <Link to="/tags/">Browse all tags</Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
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
