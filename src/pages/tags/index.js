import React from "react"
import {kebabCase} from "lodash"
import {graphql} from "gatsby"
import {
  Container,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Typography,
  makeStyles,
} from "@material-ui/core"
import {Helmet, Layout, Link} from "../../components"

const useStyles = makeStyles({
  contentBox: {
    marginBottom: "6rem",
  },
})

const TagsPage = ({
  data: {
    allMarkdownRemark: {group},
    site: {
      siteMetadata: {title},
    },
  },
}) => {
  const classes = useStyles()

  return (
    <Layout>
      <section className="section">
        <Helmet title={`Tags | ${title}`} />
        <Container className="content">
          <Grid container>
            <Grid item md={1} implementation="css" smDown component={Hidden} />
            <Grid item xs={10} className={classes.contentBox}>
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
            </Grid>
          </Grid>
        </Container>
      </section>
    </Layout>
  )
}

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
