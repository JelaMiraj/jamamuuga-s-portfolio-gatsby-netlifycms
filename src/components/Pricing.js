import React from "react"
import {PropTypes} from "prop-types"
import {
  Box,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core"
// TODO: Maybe use Card and/or Paper somewhere in Pricing.

const useStyles = makeStyles(theme => ({
  priceText: {
    fontWeight: "fontWeightBold",
    color: theme.palette.primary,
  },
  sectionBox: {},
}))

const Pricing = ({data}) => {
  const classes = useStyles()
  // const theme = useTheme()

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
              align="center"
              className={classes.priceText}
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
