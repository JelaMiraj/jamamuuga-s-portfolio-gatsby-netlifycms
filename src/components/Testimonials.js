import React from "react"
import PropTypes from "prop-types"
import {v4} from "uuid"
import {Grid, Paper, Typography} from "@material-ui/core"
// TODO: Normalize the component use & hierarchy to best practices so it is less likely to end up hacky.

const Testimonials = ({testimonials}) => (
  <Grid container>
    {testimonials.map(testimonial => (
      <Grid item xs={12} key={v4()}>
        <article key={v4()} className="message">
          <Paper>
            <Typography className="message-body">
              {testimonial.quote}
              <br />
              <cite> – {testimonial.author}</cite>
            </Typography>
          </Paper>
        </article>
      </Grid>
    ))}
  </Grid>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    }),
  ),
}

export default Testimonials
