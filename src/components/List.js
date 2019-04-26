import React from "react"
import {withPrefix} from "gatsby"
import {CardContent, CardMedia, Grid, Typography} from "@material-ui/core"
import {withStyles} from "@material-ui/styles"
import {Card, Link} from "."
// TODO: Find out when & if this custom List component should be used.

const styles = {
  cardMedia: {
    height: "200px",
  },
}

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
                <Typography gutterBottom variant="h5" component="h2">
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

const ListWrapped = withStyles(styles)(List)

export default ListWrapped
export {ListWrapped as List}
