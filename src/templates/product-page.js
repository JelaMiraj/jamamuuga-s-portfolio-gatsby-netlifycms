// eslint-disable-next-line
import withRoot from "../tools/withRoot"
// eslint-disable-next-line
import React from 'react'
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import {CardContent, Grid, Paper, Typography} from "@material-ui/core"
// import {Container} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import {
  Card,
  Features,
  Layout,
  PreviewCompatibleImage,
  Pricing,
  Testimonials,
} from "../components"
// TODO: Factor out styling into reusable classes.
// TODO: Apply styling classes to components that don't yet have them.
// TODO: Either use or make section & content components & use them here.
// FIXME: Figure out the right way to sort out invalid attribute errors in Material UI component styling attributes.
// TODO: Factor out hard coded Container as Box component.
// TODO: Replace hard coded custom Container use with (possibly external wrapped custom) Material UI v4 stable's one.
// TODO: Convert full-width-image-container to Material UI Image Component with proper attributes set.
// TODO: Find out if Bulma's content component is actually something like Typography potentially as div.
// TODO: Perhaps reconsider naming of things because their is an implicit "Template" added meaning to all template components. This means that ProductPageTemplate really means ProductPageTemplateTemplate & ProductPage is what really means ProductPageTemplate. Make sure the "Query" & "Wrapped" versions have the correct base name if you change the names of the template & meta template. Perhaps adopt a different & clearer naming concept that may have been used by other components.

const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <Box component="section" className="section--gradient">
    <Box px={[2, 3, 4]} mx="auto" maxWidth={1280} className="container">
      <Box component="section">
        <Grid container>
          <Grid item xs={10} className="is-offset-1">
            <Box>
              <Box
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
                  variant="h2"
                  fontWeight="fontWeightBold"
                  fontSize="fontSize1"
                  style={{
                    boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
                    backgroundColor: "#f40",
                    color: "white",
                    padding: "1rem",
                  }}
                >
                  {title}
                </Typography>
              </Box>
              <Grid container>
                <Grid item xs={7}>
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
                <Grid item xs={7}>
                  <Typography
                    variant="h3"
                    fontWeight="fontWeightSemiBold"
                    fontSize="fontSize1"
                  >
                    {main.heading}
                  </Typography>
                  <Typography paragraph>{main.description}</Typography>
                </Grid>
              </Grid>
              <Card className="tile is-ancestor">
                <Card direction="column" className="tile is-vertical">
                  <Card className="tile">
                    <Card
                      direction="column"
                      className="tile is-parent is-vertical"
                    >
                      <CardContent
                        component="article"
                        className="tile is-child"
                      >
                        <PreviewCompatibleImage imageInfo={main.image1} />
                      </CardContent>
                    </Card>
                    <Card className="tile is-parent">
                      <CardContent
                        component="article"
                        className="tile is-child"
                      >
                        <PreviewCompatibleImage imageInfo={main.image2} />
                      </CardContent>
                    </Card>
                  </Card>
                  <Card className="tile is-parent">
                    <CardContent component="article" className="tile is-child">
                      <PreviewCompatibleImage imageInfo={main.image3} />
                    </CardContent>
                  </Card>
                </Card>
              </Card>
              <Testimonials testimonials={testimonials} />
              <Box
                className="full-width-image-container"
                style={{
                  backgroundImage: `url(${
                    fullImage.childImageSharp
                      ? fullImage.childImageSharp.fluid.src
                      : fullImage
                  })`,
                }}
              />
              <Typography
                variant="h2"
                fontWeight="fontWeightSemiBold"
                fontSize="fontSize2"
              >
                {pricing.heading}
              </Typography>
              <Typography paragraph className="fontSize5">
                {pricing.description}
              </Typography>
              <Pricing data={pricing.plans} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Box>
)

ProductPageTemplate.propTypes = {
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

const ProductPage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
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

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

const ProductPageWrapped = withRoot(ProductPage)

const productPageQuery = graphql`
  query ProductPage($id: String!) {
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

export default ProductPageWrapped
export {
  ProductPageWrapped as ProductPage,
  productPageQuery,
  ProductPageTemplate,
}
