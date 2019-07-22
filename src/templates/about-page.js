import React from "react"
import {PropTypes} from "prop-types"
import {graphql} from "gatsby"
import {Box, Container, Button, Grid, Paper, Typography} from "@material-ui/core"
import {Card, Content, HTMLContent, Layout} from "../components"

export const AboutPageTemplate = ({title, content, contentComponent}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <Container className="container">
        <Grid className="columns">
          <Grid item xs={10} className="column is-10 is-offset-1">
            <section className="section">
              <Typography
                variant="h4"
                fontWeight="fontWeightSemiBold"
                className="title is-size-3 has-text-weight-bold is-bold-light"
              >
                {title}
              </Typography>
              <PageContent className="content" content={content} />
            </section>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default AboutPage
