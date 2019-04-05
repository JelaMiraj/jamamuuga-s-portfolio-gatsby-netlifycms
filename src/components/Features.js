import React from "react"
import PropTypes from "prop-types"
import {Box, Grid, Paper, Typography} from "@material-ui/core"
import PreviewCompatibleImage from "./PreviewCompatibleImage"

const FeatureGrid = ({gridItems}) => (
  <Grid container className="columns is-multiline">
    {gridItems.map(item => (
      <Grid item xs={6} key={item.text} className="column is-6">
        <Paper>
          <section className="section">
            <div className="has-text-centered">
              <div
                style={{
                  width: "240px",
                  display: "inline-block",
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
            <Typography paragraph>{item.text}</Typography>
          </section>
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
