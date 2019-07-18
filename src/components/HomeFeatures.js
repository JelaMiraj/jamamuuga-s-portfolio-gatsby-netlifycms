import React from "react"
import {PropTypes} from "prop-types"
import {Avatar, Chip, Grid} from "@material-ui/core"
import {withStyles} from "@material-ui/core/styles"
import {Robot} from "mdi-material-ui"

const styles = theme => ({
  featureChip: {
    fontSize: "16px",
    backgroundColor: "#fff",
    border: "1pt solid #eee",
  },
  featureChipRight: {
    fontSize: "16px",
    backgroundColor: "#fff",
    border: "1pt solid #eee",
    float: "right",
  },
  featureGrid: {
    marginBottom: "25px",
  },
  avi: {
    width: "40px",
    height: "40px",
    color: "#fff",
    backgroundColor: theme.palette.secondary.light,
  },
})
const HomeFeatures = props => (
  <Grid
    spacing={3}
    container
    justify="center"
    className={props.classes.featureGrid}
  >
    <Grid item md={6}>
      <Chip
        className={props.classes.featureChipRight}
        avatar={
          <Avatar className={props.classes.avi}>
            <Robot />
          </Avatar>
        }
        label="Uses Material UI"
      />
    </Grid>
    <Grid item md={6}>
      <Chip
        className={props.classes.featureChip}
        avatar={
          <Avatar className={props.classes.avi}>
            <Robot />
          </Avatar>
        }
        label="Uses Material Icons"
      />
    </Grid>
  </Grid>
)

HomeFeatures.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HomeFeatures)
