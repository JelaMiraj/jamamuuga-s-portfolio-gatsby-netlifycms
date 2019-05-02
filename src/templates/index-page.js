import React from "react"
import PropTypes from "prop-types"
// import {Link, graphql} from "gatsby"
import {graphql} from "gatsby"
import {Button, Grid, Typography} from "@material-ui/core"
// import {withStyles} from "@material-ui/core/styles"
import {makeStyles, withStyles} from "@material-ui/core/styles"
import Layout from "../components/Layout"
import Link from "../components/Link"
import Features from "../components/Features"
import BlogRoll from "../components/BlogRoll"
import mytheme from "../styles/themes/theme"
import withRoot from "../tools/withRoot"

// TODO: Convert everything to use React Hooks (Don't forget the ESLint plugin), Babel-Blade (DRY GraphQL), & functions not classes.

// FIXME: complains about object is not a function....
// const useStyles = makeStyles(theme => ({
//   root: {
//     textAlign: "center",
//     paddingTop: theme.spacing(20),
//   },
// }))
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main,
}) => {
  // TODO: Delete this null variable when eslint stops reformatting and breaking this function.
  const noOp = null
  /* const classes = useStyles() */

  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div
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
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
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
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
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
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <Grid container className="columns">
              <Grid item xs={10} className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <Typography variant="h1" className="title">
                        {mainpitch.title}
                      </Typography>
                    </div>
                    <div className="tile">
                      <Typography variant="h3" className="subtitle">
                        {mainpitch.description}
                      </Typography>
                    </div>
                  </div>
                  <Grid container className="columns">
                    <Grid item xs={12} className="column is-12">
                      <Typography
                        variant="h3"
                        className="has-text-weight-semibold is-size-2"
                      >
                        {heading}
                      </Typography>
                      <Typography paragraph>{description}</Typography>
                    </Grid>
                  </Grid>
                  <Features gridItems={intro.blurbs} />
                  <Grid container className="columns">
                    <Grid
                      item
                      xs={12}
                      className="column is-12 has-text-centered"
                    >
                      <Button variant="contained" color="secondary">
                        <Link className="btn" to="/products">
                          See all products
                        </Link>
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className="column is-12">
                    <Typography
                      variant="h3"
                      className="has-text-weight-semibold is-size-2"
                    >
                      Latest stories
                    </Typography>
                    <BlogRoll />
                    <Grid
                      item
                      xs={12}
                      className="column is-12 has-text-centered"
                    >
                      <Button variant="contained" color="secondary">
                        <Link className="btn" to="/blog">
                          Read more
                        </Link>
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </section>
    </div>
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

// FIXME: Somehow, trying to use withStyles this way fails
// export default withRoot(withStyles(mytheme)(IndexPage))
export default withRoot(IndexPage)

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
