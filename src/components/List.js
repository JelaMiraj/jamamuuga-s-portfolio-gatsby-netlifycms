import React from "react"
import {withPrefix} from "gatsby"
import {Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core"
import {withStyles} from "@material-ui/core/styles"
import Link from "./Link"

const styles = {
  cardMedia: {
    height: "200px",
  },
}

// TODO: If this custom list is not generic like Material UI List, then rename it.
// TODO: Find out if Material UI List should be used in here.
const List = props => {
  const {classes} = props

  return (
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
                className={classes.cardMedia}
                image={withPrefix(publicURL)}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" m>
                  <Link to={path}>{title}</Link>
                </Typography>
                <Typography component="p">{excerpt}</Typography>
              </CardContent>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}

// export default List
export default withStyles(styles)(List)
// export {List}
