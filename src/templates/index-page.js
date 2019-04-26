// eslint-disable-next-line
import withRoot from "../tools/withRoot"
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import {
  // Container,
  CardAction,
  CardContent,
  Button,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import {BlogRoll, Card, Features, Layout, Link} from "../components"
// TODO: Convert everything to use Babel-Blade (DRY GraphQL).
// TODO: Findout if a React fragment should be used instead of Box or div as wrapper component in template.
// TODO: Maybe this Box based div like wrapper should be Container equivalent instead.

// FIXME: complains about object is not a function....
// const useStyles = makeStyles(theme => ({
//   root: {
//     textAlign: "center",
//     paddingTop: theme.spacing(20),
//   },
// }))
const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <Box>
    <Box
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <Box
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          fontWeight="fontWeightBold"
          className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgb(255, 68, 0)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h3"
          fontWeight="fontWeightBold"
          className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgb(255, 68, 0)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {subheading}
        </Typography>
      </Box>
    </Box>
    <Box component="section" className="section section--gradient">
      <Box px={[2, 3, 4]} mx="auto" maxWidth={1280} className="container">
        <Box component="section" className="section">
          <Grid container>
            <Grid item xs={10} className="is-offset-1">
              <Box className="content">
                <Box className="content">
                  <Card className="tile">
                    <CardContent>
                      <Typography variant="h1" className="title">
                        {mainpitch.title}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card className="tile">
                    <CardContent>
                      <Typography variant="h3" className="subtitle">
                        {mainpitch.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      variant="h3"
                      fontWeight="fontWeightSemiBold"
                      fontSize="fontSize2"
                    >
                      {heading}
                    </Typography>
                    <Typography paragraph>{description}</Typography>
                  </Grid>
                </Grid>
                <Features gridItems={intro.blurbs} />
                <Grid container>
                  <Grid item xs={12} align="center">
                    <Button variant="contained" color="secondary">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="h3"
                    fontWeight="fontWeightSemiBold"
                    fontSize="fontSize2"
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
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  </Box>
)

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

const IndexPageWrapped = withRoot(IndexPage)

const indexPageQuery = graphql`
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

export default IndexPageWrapped
export {IndexPageWrapped as IndexPage, IndexPageTemplate, indexPageQuery}
