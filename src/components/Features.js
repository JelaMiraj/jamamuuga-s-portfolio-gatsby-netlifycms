import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <Grid container className="columns is-multiline">
    {gridItems.map(item => (
      <Grid item xs={6} key={item.text} className="column is-6">
        <Paper>
          <section className="section">
            <div className="has-text-centered">
              <div
                style={{
                  width: '240px',
                  display: 'inline-block',
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
            <Typography component="p">{item.text}</Typography>
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
