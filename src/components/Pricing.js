import React from "react"
import {PropTypes} from "prop-types"
import {Box, Grid, List, ListItem, Paper, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
// TODO: Maybe use Card and/or Paper somewhere in Pricing.

const useStyles = makeStyles({
  sectionBox: {},
})

const Pricing = ({data}) => {
  const classes = useStyles()

  return (
    <Grid container>
      {data.map(price => (
        <Grid item xs={4} key={price.plan}>
          <Box component="section" className={classes.sectionBox}>
            <Typography variant="h4" align="center" fontWeight="600">
              {price.plan}
            </Typography>
            <Typography
              variant="h2"
              fontWeight="fontWeightBold"
              color="primary"
              align="center"
            >
              ${price.price}
            </Typography>
            <Typography paragraph fontWeight="600">
              {price.description}
            </Typography>
            <List>
              {price.items.map(item => (
                <ListItem key={item} xs={5}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

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
