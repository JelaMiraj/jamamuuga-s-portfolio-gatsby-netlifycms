import React from "react"
import {kebabCase} from "lodash"
import {graphql} from "gatsby"
import {
  Box,
  Container,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core"
import styled from "styled-components/macro"
import {Helmet, Layout, Link} from "../../components"

const StyledContentBoxGridItem = styled(Grid)`
  margin-bottom: 6rem;
`

const TagsPage = ({
  data: {
    allMarkdownRemark: {group},
    site: {
      siteMetadata: {title},
    },
  },
}) => (
  <Layout>
    <Box component="section" className="section">
      <Helmet title={`Tags | ${title}`} />
      <Container className="content">
        <Grid container>
          <Grid item md={1} implementation="css" smDown component={Hidden} />
          <StyledContentBoxGridItem item xs={10}>
            <Typography variant="h3" fontWeight="600" className="title">
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
          </StyledContentBoxGridItem>
        </Grid>
      </Container>
    </Box>
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
