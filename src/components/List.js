import React from "react"
import {withPrefix} from "gatsby"
import {CardContent, CardMedia, Grid, Typography} from "@material-ui/core"
import Card from "./Card"
import Link from "./Link"
// TODO: Find out when & if this custom List component should be used.

const List = props => (
  <Grid
    spacing={24}
    container
    direction="row"
    alignItems="flex-start"
    justify="center"
  >
    {props.items.map(edge => {
      const {
        node: {
          excerpt,
          frontmatter: {
            path,
            title,
            image: {publicURL},
          },
        },
      } = edge

      return (
        <Grid item xs={12} md={6} key={path}>
          <Card>
            <CardMedia
              style={{height: "200px"}}
              image={withPrefix(publicURL)}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                <Link to={path}>{title}</Link>
              </Typography>
              <Typography paragraph>{excerpt}</Typography>
            </CardContent>
          </Card>
        </Grid>
      )
    })}
  </Grid>
)

export default List
export {List}
