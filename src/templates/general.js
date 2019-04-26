import React from "react"
import {graphql} from "gatsby"
import {CardContent, CardMedia, Typography} from "@material-ui/core"
import {withPrefix} from "gatsby"
import {withStyles} from "@material-ui/styles"
import {Card, Page, SEO} from "../components"
import withRoot from "../utils/withRoot"

const styles = {
  cardMedia: {
    height: "200px",
  },
}

const Detail = ({classes, data}) => {
  const {
    title,
    image: {publicURL},
  } = data.markdownRemark.frontmatter
  const {html} = data.markdownRemark

  return (
    <Page>
      <SEO title={title} />
      <Card>
        <CardMedia
          className={classes.cardMedia}
          image={withPrefix(publicURL)}
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="h2">
            {title}
          </Typography>
          <Typography dangerouslySetInnerHTML={{__html: html}} />
        </CardContent>
      </Card>
    </Page>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        image {
          publicURL
        }
        title
        path
      }
      html
    }
  }
`

export default withRoot(withStyles(styles)(Detail))
