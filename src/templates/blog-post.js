// eslint-disable-next-line
import withRoot from "../tools/withRoot"
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import {
  // Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import {kebabCase} from "lodash"
import {graphql} from "gatsby"
import {Helmet, Layout, Link} from "../components"
import {Content, HTMLContent} from "../components/Content"

const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <Box component="section">
      {helmet || ""}
      <Box px={[2, 3, 4]} mx="auto" maxWidth={1280} className="container">
        <Grid container>
          <Grid item xs={10} className="is-offset-1">
            <Typography
              variant="h1"
              fontSize="fontSize2"
              fontWeight="fontWeightSemiBold"
              className="title"
            >
              {title}
            </Typography>
            <Typography paragraph>{description}</Typography>
            <PostContent content={content} />
            {tags && tags.length ? (
              <Box style={{marginTop: `4rem`}}>
                <Typography variant="h4">Tags</Typography>
                <List className="taglist">
                  {tags.map(tag => (
                    <ListItem key={`${tag}tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ) : null}
          </Grid>
        </Grid>
      </Box>
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

const BlogPostWrapped = withRoot(BlogPost)

const blogPostPageQuery = graphql`
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

export default BlogPostWrapped
export {BlogPostWrapped as BlogPost, BlogPostTemplate, blogPostPageQuery}
