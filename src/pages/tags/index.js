// eslint-disable-next-line
import {withRoot} from "../tools"
// eslint-disable-next-line
import React from "react"
import {kebabCase} from "lodash"
import {graphql} from "gatsby"
import {withStyles} from "@material-ui/styles"
import {Helmet, Layout, Link} from "../../components"
import myTheme from "../../styles/themes/theme"

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
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{marginBottom: "6rem"}}
          >
            <h1 className="title is-size-2 is-bold-light">Tags</h1>
            <ul className="taglist">
              {group.map(tag => (
                <li key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
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

// FIXME: Somehow, trying to use withStyles this way fails
export default withRoot(withStyles(myTheme)(TagsPage))
// export default withRoot(TagsPage)
export {tagPageQuery}
