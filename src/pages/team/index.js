import React from "react"
import PropTypes from "prop-types"
import {graphql, withPrefix} from "gatsby"
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Typography,
} from "@material-ui/core"
import {Rocket} from "mdi-material-ui"
import {Helmet, Layout, Link, Page, SEO} from "../../components"
import withRoot from "../../tools/withRoot"

const Team = props => {
  const teams = props.data.allMarkdownRemark.edges

  return (
    <Page title="Meet the Team">
      <SEO title="Meet the Team" />
      <Typography paragraph>
        We are here to help! Let us know what we can do. And we're of course
        always interested to find new recruits to join our amazing team. We are
        here to help! Let us know what we can do. And we're of course always
        interested to find new recruits to join our amazing team. We are here to
        help! Let us know what we can do. And we're of course always interested
        to find new recruits to join our amazing team.
      </Typography>

      <GridList cellHeight={500} cols={3}>
        {teams.map(edge => {
          const {
            node: {
              frontmatter: {
                path,
                title,
                image: {publicURL},
                jobtitle,
              },
            },
          } = edge

          return (
            <Link key={path} to={path}>
              <GridListTile cols={1}>
                <img src={withPrefix(publicURL)} alt={title} />
                <GridListTileBar
                  title={title}
                  subtitle={jobtitle}
                  actionIcon={
                    <IconButton
                      className="teamIcon"
                      style={{color: "rgba(255, 255, 255, 0.54)"}}
                    >
                      <Rocket />
                    </IconButton>
                  }
                />
              </GridListTile>
            </Link>
          )
        })}
      </GridList>
    </Page>
  )
}

const teamIndexQuery = graphql`
  query TeamQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/team/"}}
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          html
          frontmatter {
            image {
              publicURL
            }
            title
            path
            jobtitle
          }
        }
      }
    }
  }
`

const TeamWrapped = withRoot(Team)

export default TeamWrapped
export {TeamWrapped as Team, teamIndexQuery}
