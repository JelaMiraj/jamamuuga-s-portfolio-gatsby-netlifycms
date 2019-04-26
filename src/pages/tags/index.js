// eslint-disable-next-line
import withRoot from "../../tools/withRoot"
// eslint-disable-next-line
import React from "react"
import {
  // Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import {kebabCase} from "lodash"
import {graphql} from "gatsby"
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
    <Box component="section">
      <Helmet title={`Tags | ${title}`} />
      <Box
        px={[2, 3, 4]}
        mx="auto"
        maxWidth={1280}
        className="container"
        justify="center"
      >
        <Grid container>
          <Grid
            item
            xs={10}
            className="is-offset-1"
            style={{marginBottom: "6rem"}}
          >
            <Typography
              variant="h1"
              fontSize="fontSize2"
              fontWeight="fontWeightSemiBold"
              className="title"
            >
              Tags
            </Typography>
            <List className="taglist">
              {group.map(tag => (
                <ListItem key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Layout>
)

const tagPageQuery = graphql`
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

const TagsPageWrapped = withRoot(TagsPage)

export default TagsPageWrapped
export {TagsPageWrapped as Index, tagPageQuery}
