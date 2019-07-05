import {Grid} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
// Originally from: https://github.com/danielmahon/gatsby-starter-procyon/blob/netlifycms/src/components/Section.js

const useStyles = makeStyles({
  grid: {
    padding: "2em 0 4em 0",
  },
})

const Section = props => {
  const {children, classes} = props

  return (
    <Grid
      component="section"
      className={classes.grid}
      spacing="2"
      justify="center"
      container="true"
    >
      {children}
    </Grid>
  )
}

export default Section
