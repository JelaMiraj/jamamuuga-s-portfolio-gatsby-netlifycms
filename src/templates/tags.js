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
import styled from "styled-components"
import {Helmet, Layout, Link} from "../components"

const StyledGridItemContent = styled(Grid)`
  margin-bottom: 6rem;
`

const StyledSectionBox = styled(Box)`
`

const StyledSectionBoxGradient = styled(Box)`
  /* TODO: Import section--gradient from old stylesheet. */
`

const TagRoute = props => {
  const posts = props.data.allMarkdownRemark.edges
  const postLinks = posts.map(post => (
    <ListItem key={post.node.fields.slug}>
      <ListItemText>
        <Link to={post.node.fields.slug}>
          <Typography variant="h4">
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
      <Box component="section" className="section">
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
              <StyledGridItemContent item xs={10}>
                <Typography variant="h5" fontWeight="600">
                  {tagHeader}
                </Typography>
                <List className="taglist">{postLinks}</List>
                <Typography paragraph>
                  <Link to="/tags/">Browse all tags</Link>
                </Typography>
              </StyledGridItemContent>
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
