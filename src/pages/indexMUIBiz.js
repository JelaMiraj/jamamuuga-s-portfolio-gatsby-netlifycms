// eslint-disable-next-line
import withRoot from "../tools/withRoot"
// eslint-disable-next-line
import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import {Avatar, Button, Carousel} from "@material-ui/core"
import {Gift} from "mdi-material-ui"
import {withStyles} from "@material-ui/styles"
import {Card, HomeFeatures, Link, Page, SEO} from "../components"

const styles = theme => ({
  root: {
    fontWeight: "bold",
  },
})

const Home = ({classes, data}) => {
  const products = data.allMarkdownRemark.edges

  return (
    <Page title="Gatsby Material UI Business Starter">
      <SEO title="Home">
        <meta
          name="description"
          content="Beautiful Gatsby Material UI Business Starter. Tiny code. Well organized. Ready to customize and go."
        />
      </SEO>

      <HomeFeatures />
      <Card
        title="Our Products"
        avatar={
          <Avatar>
            <Gift />
          </Avatar>
        }
        action={
          <Button
            variant="contained"
            color="secondary"
            className={classes.root}
            component={Link}
            to="/products"
          >
            View All Products
          </Button>
        }
        style={{minHeight: 523}}
      >
        <Carousel items={products} />
      </Card>
    </Page>
  )
}

const indexQuery = graphql`
  query {
    allFile(filter: {extension: {eq: "jpg"}}) {
      edges {
        node {
          publicURL
        }
      }
    }
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/products/"}}
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          id
          frontmatter {
            image {
              publicURL
            }
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
  }
`

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

const HomeWrapped = withRoot(withStyles(styles)(Home))

export default HomeWrapped
export {HomeWrapped as IndexMUIBiz, indexQuery}
