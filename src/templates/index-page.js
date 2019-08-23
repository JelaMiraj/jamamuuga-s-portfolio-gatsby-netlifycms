import React from "react"
import {PropTypes} from "prop-types"
import {graphql} from "gatsby"
import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Hidden,
  Paper,
  Typography,
} from "@material-ui/core"
import styled from "styled-components"
import {Card, BlogRoll, Features, Layout, Link} from "../components"

// TODO: Maybe use Card instead of or around Paper.

// TODO: Try Babel-Blade (DRY GraphQL).

// TODO: Figure out where to apply this root wrapper style.
const StyledWrapperBox = styled(Box)`
    text-align: center;
    padding-top: ${props => props.theme.spacing(20)};
`
const StyledBackgroundImageBox = styled(Box)`
  /* backgroundImageBox: */
    /* TODO: Add full-width-image from old stylesheet. */
    background-position: top left;
    background-attachment: fixed;
    margin-top: 0;
`

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
`

const StyledContentBox = styled(Box)`
    display: flex;
    height: 150px;
    line-height: 1;
    justify-content: space-around;
    align-items: left;
    flex-direction: column;
`

const StyledPageHeadingsTypography = styled(Typography)`
    font-weight: ${props => props.theme.typography.fontWeightBold};
    /* TODO: Change everything here to match Material UI's way & organization. */
    /* box-shadow: rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px; */
    box-shadow: ${props => props.theme.palette.primary.lighter} 0.5rem 0px 0px, ${props => props.theme.palette.primary.lighter} -0.5rem 0px 0px;
    /* background-color: rgb(255, 68, 0); */
    background-color: ${props => props.theme.palette.primary.lighter};
    color: white;
    line-height: 1;
    padding: 0.25em;
`

const StyledSectionBox = styled(Box)`
    padding-top: ${props => props.theme.spacing(2)};
    padding-bottom: ${props => props.theme.spacing(2)};
`

const StyledSectionBoxGradient = styled(Box)`
    /* TODO: Add section--gradient from old stylesheet. */
    padding-top: ${props => props.theme.spacing(2)};
    padding-bottom: ${props => props.theme.spacing(2)};
`

export const IndexPageTemplate = ({
  // classes,
  // data,
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  // main,
  // eslint-disable-next-line
}) => {
  // eslint-disable-next-line
  return (
    <StyledBackgroundImageBox>
      <StyledBackgroundImageBox
        style={{
          backgroundImage: `url(${
            image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}
      >
        <StyledContentBox>
          <StyledPageHeadingsTypography variant="h3">
            {title}
          </StyledPageHeadingsTypography>
          <StyledPageHeadingsTypography variant="h5">
            {subheading}
          </StyledPageHeadingsTypography>
        </StyledContentBox>
      </StyledBackgroundImageBox>
      <StyledSectionBoxGradient component="section">
        <Container>
          <StyledSectionBox component="section">
            <Grid container>
              <Grid
                item
                md={1}
                implementation="css"
                smDown
                component={Hidden}
              />
              <Grid item xs={10}>
                <Box className="content">
                  <Box className="content">
                    <Paper className="tile">
                      <Typography variant="h2">{mainpitch.title}</Typography>
                    </Paper>
                    <Paper className="tile">
                      <Typography variant="h3">
                        {mainpitch.description}
                      </Typography>
                    </Paper>
                  </Box>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h3" fontWeight="600">
                        {heading}
                      </Typography>
                      <Typography paragraph>{description}</Typography>
                    </Grid>
                  </Grid>
                  <Features gridItems={intro.blurbs} />
                  <Grid container>
                    <Grid item xs={12} align="center">
                      <Button variant="contained" color="secondary">
                        <Link className="btn" to="/portfolio">
                          See all portfolio
                        </Link>
                      </Button>
                    </Grid>
                  </Grid>
                  {/* <Grid item xs={12}>
                    <Typography
                      variant="h3"
                      fontWeight="600"
                    >
                      Latest stories
                    </Typography>
                      <BlogRoll />
                    <Grid item xs={12} align="center">
                      <Button variant="contained" color="secondary">
                        <Link className="btn" to="/blog">
                          Read more
                        </Link>
                      </Button>
                    </Grid>
                  </Grid> */}
                </Box>
              </Grid>
            </Grid>
          </StyledSectionBox>
        </Container>
      </StyledSectionBoxGradient>
    </StyledBackgroundImageBox>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`

export default IndexPage
// export {IndexPageTemplate, pageQuery}
// export {IndexPage}
