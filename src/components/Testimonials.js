import React from "react"
import PropTypes from "prop-types"
import {v4} from "uuid"
import {CardContent, Grid, Typography} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import Card from "./Card"

const Testimonials = ({testimonials}) => (
  <Grid container>
    {testimonials.map(testimonial => (
      <Grid item xs={12} key={v4()}>
        <Card component="article" key={v4()} className="message">
          <CardContent>
            <Typography className="message-body">
              {testimonial.quote}
              <br />
              <Typography component="cite"> – {testimonial.author}</Typography>
            </Typography>
          </CardContent>
        </Card>
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
export {Testimonials}
