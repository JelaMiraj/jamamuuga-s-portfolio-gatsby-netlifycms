import React from "react"
import PropTypes from "prop-types"
import {kebabCase} from "lodash"
import {graphql} from "gatsby"
import {
  Container,
  Box,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core"
import {Content, Helmet, HTMLContent, Layout, Link} from "../components"

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <Box component="section" className="section">
      {helmet || ""}
      <Container className="container content">
        <Grid container>
          <Grid item md={1} implementation="css" smDown component={Hidden} />
          <Grid item xs={10}>
            <Typography variant="h3" fontWeight="600">
              {title}
            </Typography>
            <Typography paragraph>{description}</Typography>
            <PostContent content={content} />
            {tags && tags.length ? (
              <Box marginTop="4rem">
                <Typography variant="h4">Tags</Typography>
                <List className="taglist">
                  {tags.map(tag => (
                    <ListItem key={`${tag}tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>
                        <ListItemText>{tag}</ListItemText>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ) : null}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`

export default BlogPost
