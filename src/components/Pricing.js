import React from "react"
import PropTypes from "prop-types"
import {Grid, List, ListItem, Typography} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"

const Pricing = ({data}) => (
  <Grid container>
    {data.map(price => (
      <Grid item xs={4} key={price.plan}>
        <Box component="section">
          <Typography
            component="h4"
            align="center"
            fontWeight="fontWeightSemiBold"
          >
            {price.plan}
          </Typography>
          <Typography
            variant="h2"
            fontSize="fontSize1"
            fontWeight="fontWeightBold"
            color="textPrimary"
            align="center"
          >
            ${price.price}
          </Typography>
          <Typography paragraph fontWeight="fontWeightSemiBold">
            {price.description}
          </Typography>
          <List>
            {price.items.map(item => (
              <ListItem key={item} fontSize="fontSize5">
                {item}
              </ListItem>
            ))}
          </List>
        </Box>
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
export {Pricing}
