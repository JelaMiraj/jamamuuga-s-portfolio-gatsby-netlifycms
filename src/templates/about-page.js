// eslint-disable-next-line
import withRoot from "../tools/withRoot"
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import {Button, Grid, Paper, Typography} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import Card from "../components/Card"
import Layout from "../components/Layout"
import {Content, HTMLContent} from "../components/Content"

const AboutPageTemplate = ({title, content, contentComponent}) => {
  const PageContent = contentComponent || Content

  return (
    <Box component="section" className="section--gradient">
      <Box className="container">
        <Grid container>
          <Grid item xs={10} className="is-offset-1">
            <Box component="section">
              <Typography
                variant="h2"
                fontWeight="fontWeightSemiBold"
                fontSize="fontSize3"
                className="title"
              >
                {title}
              </Typography>
              <PageContent className="content" content={content} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
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

const AboutPageWrapped = withRoot(AboutPage)

const AboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default AboutPageWrapped
export {AboutPageWrapped as AboutPage, AboutPageQuery, AboutPageTemplate}
