import React from "react"
import {PropTypes} from "prop-types"
import {kebabCase} from "lodash"
import {graphql} from "gatsby"
import {
  Container,
  Grid,
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
    <section className="section">
      {helmet || ""}
      <Container className="container content">
        <Grid container className="columns">
          <Grid item xs={10} className="column is-10 is-offset-1">
            <Typography
              variant="h1"
              fontWeight="fontWeightSemiBold"
              className="title is-size-2 has-text-weight-bold is-bold-light"
            >
              {title}
            </Typography>
            <Typography paragraph>{description}</Typography>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{marginTop: `4rem`}}>
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
              </div>
            ) : null}
          </Grid>
        </Grid>
      </Container>
    </section>
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
