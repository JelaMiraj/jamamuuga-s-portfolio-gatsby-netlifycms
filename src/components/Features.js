import React from "react"
import {PropTypes} from "prop-types"
import {Box, Grid, Paper, Typography} from "@material-ui/core"
import PreviewCompatibleImage from "./PreviewCompatibleImage"

const FeatureGrid = ({gridItems}) => (
  <Grid container wrap="wrap">
    {gridItems.map(item => (
      <Grid item xs={6} key={item.text}>
        <Paper>
          <Box component="section" className="section">
            <Typography component="div" paragraph align="center">
              <Box width="240px" display="inline-block">
                <PreviewCompatibleImage imageInfo={item} />
              </Box>
            </Typography>
            <Typography paragraph>{item.text}</Typography>
          </Box>
        </Paper>
      </Grid>
    ))}
  </Grid>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    }),
  ),
}

export default FeatureGrid
