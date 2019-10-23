import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import {
  Box,
  Card,
  Container,
  Grid,
  Hidden,
  Paper,
  Typography,
} from "@material-ui/core"
import { Button } from "gatsby-theme-material-ui"
import { Content, HTMLContent, Layout } from "../components"

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Box component="section" className="section section--gradient">
      <Container>
        <Grid container>
          <Grid item md={1} implementation="css" smDown component={Hidden} />
          <Grid item xs={10}>
            <Box component="section" className="section">
              <Box fontWeight="600">
                <Typography variant="h4" className="title">
                  {title}
                </Typography>
              </Box>
              <PageContent content={content} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

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
