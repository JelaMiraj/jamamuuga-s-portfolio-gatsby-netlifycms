import React from "react"
import {kebabCase} from "lodash"
import {graphql} from "gatsby"
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core"
import {Helmet, Layout, Link} from "../../components"

const TagsPage = ({
  data: {
    allMarkdownRemark: {group},
    site: {
      siteMetadata: {title},
    },
  },
}) => (
  <Layout>
    <section className="section">
      <Helmet title={`Tags | ${title}`} />
      <Container className="container content">
        <Grid container className="columns">
          <Grid
            item
            xs={10}
            className="column is-10 is-offset-1"
            style={{marginBottom: "6rem"}}
          >
            <Typography variant="h1" className="title is-size-2 is-bold-light">
              Tags
            </Typography>
            <List className="taglist">
              {group.map(tag => (
                <ListItem key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    <ListItemText>
                      {tag.fieldValue} ({tag.totalCount})
                    </ListItemText>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </section>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

// export default TagsPage
// export {tagPageQuery}
