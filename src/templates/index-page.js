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
import {makeStyles} from "@material-ui/core/styles"
import {Card, BlogRoll, Features, Layout, Link} from "../components"

// TODO: Maybe use Card instead of or around Paper.

// TODO: Convert everything to use React Hooks (Don't forget the ESLint plugin), Babel-Blade (DRY GraphQL).

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    // Spacing can be either called on a imported theme object, or imported from @material-ui/system.
    paddingTop: "20",
  },
  backgroundImageBox: {
    // TODO: Add full-width-image from old stylesheet.
    // TODO: Add margin-top-0 from old stylesheet.
    backgroundPosition: `top left`,
    backgroundAttachment: `fixed`,
  },
  cardMedia: {
    height: "200px",
  },
  contentBox: {
    display: "flex",
    height: "150px",
    lineHeight: "1",
    justifyContent: "space-around",
    alignItems: "left",
    flexDirection: "column",
  },
  pageHeadings: {
    fontWeight: "fontWeightBold",
    // TODO: Change everything here to match Material UI's way & organization.
    boxShadow:
      "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
    backgroundColor: "rgb(255, 68, 0)",
    color: "white",
    lineHeight: "1",
    padding: "0.25em",
  },
  sectionBox: {
    paddingTop: "2",
    paddingBottom: "2",
  },
  sectionBoxGradient: {
    // TODO: Add section--gradient from old stylesheet.
    paddingTop: "2",
    paddingBottom: "2",
  },
})

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
  const classes = useStyles()

  // eslint-disable-next-line
  return (
    <Box>
      <Box
        className={classes.backgroundImageBox}
        style={{
          backgroundImage: `url(${
            image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}
      >
        <Box className={classes.contentBox}>
          <Typography variant="h3" className={classes.pageHeadings}>
            {title}
          </Typography>
          <Typography variant="h5" className={classes.pageHeadings}>
            {subheading}
          </Typography>
        </Box>
      </Box>
      <Box component="section" className={classes.sectionBoxGradient}>
        <Container>
          <Box component="section" className={classes.sectionBox}>
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
          </Box>
        </Container>
      </Box>
    </Box>
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
