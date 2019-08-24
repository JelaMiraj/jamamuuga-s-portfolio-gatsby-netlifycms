import React from "react"
import {PropTypes} from "prop-types"
import {
  Box,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from "@material-ui/core"
import styled from "styled-components"
// TODO: Maybe use Card and/or Paper somewhere in Pricing.

const StyledPriceTextTypography = styled(Typography)`
  font-weight: ${props => props.theme.typography.fontWeightBold};
  color: ${props => props.theme.palette.primary};
`

// Don't forget to use component="section"
// const StyledSectionBox = styled(Box)`
// `

const Pricing = ({data}) => {
  return (
    <Grid container>
      {data.map(price => (
        <Grid item xs={4} key={price.plan}>
          <Box component="section">
            <Typography variant="h4" align="center" fontWeight="600">
              {price.plan}
            </Typography>
            <StyledPriceTextTypography
              variant="h2"
              align="center"
            >
              ${price.price}
            </StyledPriceTextTypography>
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
