import React from "react"
import {PropTypes} from "prop-types"
import {graphql} from "gatsby"
import {
  Container,
  Grid,
  GridList,
  GridListTile,
  Paper,
  Typography,
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {
  Features,
  Layout,
  Pricing,
  PreviewCompatibleImage,
  Testimonials,
} from "../components"
// TODO: Maybe use Cards, Lists, and/or Grids instead of GridList

const useStyles = makeStyles({
  root: {},
})
export const PortfolioPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => {
  const classes = useStyles()

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <Grid container className="columns">
            <Grid item xs={10} className="is-offset-1">
              <div className="content">
                <div
                  className="full-width-image-container margin-top-0"
                  style={{
                    backgroundImage: `url(${
                      image.childImageSharp
                        ? image.childImageSharp.fluid.src
                        : image
                    })`,
                  }}
                >
                  <Typography
                    variant="h3"
                    fontWeight="600"
                    style={{
                      boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
                      backgroundColor: "#f40",
                      color: "white",
                      padding: "1rem",
                    }}
                  >
                    {title}
                  </Typography>
                </div>
                <Grid container>
                  <Grid item xs={7}>
                    <Typography variant="h4" fontWeight="600">
                      {heading}
                    </Typography>
                    <Typography paragraph>{description}</Typography>
                  </Grid>
                </Grid>
                <Features gridItems={intro.blurbs} />
                <Grid container className="columns">
                  <Grid item xs={7}>
                    <Typography variant="h4" fontWeight="600">
                      {main.heading}
                    </Typography>
                    <Typography paragraph>{main.description}</Typography>
                  </Grid>
                </Grid>
                <div className="tile is-ancestor">
                  <Grid container className="tile is-vertical">
                    <Grid item>
                      <GridList className="tile">
                        <GridListTile className="tile is-parent is-vertical">
                          <article className="tile is-child">
                            <PreviewCompatibleImage imageInfo={main.image1} />
                          </article>
                        </GridListTile>
                        <GridListTile className="tile is-parent">
                          <article className="tile is-child">
                            <PreviewCompatibleImage imageInfo={main.image2} />
                          </article>
                        </GridListTile>
                      </GridList>
                    </Grid>
                    <Grid item>
                      <GridList>
                        <GridListTile className="tile is-parent">
                          <article className="tile is-child">
                            <PreviewCompatibleImage imageInfo={main.image3} />
                          </article>
                        </GridListTile>
                      </GridList>
                    </Grid>
                  </Grid>
                </div>
                <Testimonials testimonials={testimonials} />
                <div
                  className="full-width-image-container"
                  style={{
                    backgroundImage: `url(${
                      fullImage.childImageSharp
                        ? fullImage.childImageSharp.fluid.src
                        : fullImage
                    })`,
                  }}
                />
                <Typography variant="h3" fontWeight="600">
                  {pricing.heading}
                </Typography>
                <Typography variant="h6" paragraph>
                  {pricing.description}
                </Typography>
                <Pricing data={pricing.plans} />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  )
}

PortfolioPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const PortfolioPage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <Layout>
      <PortfolioPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const portfolioPageQuery = graphql`
  query PortfolioPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
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
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`

export default PortfolioPage
