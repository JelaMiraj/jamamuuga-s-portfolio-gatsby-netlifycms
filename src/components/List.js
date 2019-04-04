import React from "react"
// import {Link, withPrefix} from "gatsby"
import {withPrefix} from "gatsby"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Link from "./Link"

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
