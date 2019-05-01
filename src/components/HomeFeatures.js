import React from "react"
import PropTypes from "prop-types"
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

const HomeFeatures = ({classes}) => (
  <Grid spacing={24} container justify="center" className={classes.featureGrid}>
    <Grid item md={6}>
      <Chip
        className={classes.featureChipRight}
        avatar={
          <Avatar className={classes.avi}>
            <Robot />
          </Avatar>
        }
        label="Uses Material UI"
      />
    </Grid>
    <Grid item md={6}>
      <Chip
        className={classes.featureChip}
        avatar={
          <Avatar className={classes.avi}>
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

const HomeFeaturesStyled = withStyles(styles)(HomeFeatures)

export default HomeFeaturesStyled
export {HomeFeaturesStyled as HomeFeatures}
