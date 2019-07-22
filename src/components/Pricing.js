import React from "react"
import {PropTypes} from "prop-types"
import {Grid, List, ListItem, Paper, Typography} from "@material-ui/core"
// TODO: Maybe use Card and/or Paper somewhere in Pricing.

const Pricing = ({data}) => (
  <Grid container className="columns">
    {data.map(price => (
      <Grid item xs={4} key={price.plan} className="column">
        <section className="section">
          <Typography
            component="h4"
            className="has-text-centered has-text-weight-semibold"
          >
            {price.plan}
          </Typography>
          <Typography
            component="h2"
            className="is-size-1 has-text-weight-bold has-text-primary has-text-centered"
          >
            ${price.price}
          </Typography>
          <Typography paragraph className="has-text-weight-semibold">
            {price.description}
          </Typography>
          <List>
            {price.items.map(item => (
              <ListItem key={item} className="is-size-5">
                {item}
              </ListItem>
            ))}
          </List>
        </section>
      </Grid>
    ))}
  </Grid>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    }),
  ),
}

export default Pricing
