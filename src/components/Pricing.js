import React from "react"
import PropTypes from "prop-types"
import {Box, Grid, List, ListItem, Paper, Typography} from "@material-ui/core"
import styled from "styled-components/macro"
// TODO: Maybe use Card and/or Paper somewhere in Pricing.
// TODO: Decide between Typography align="center" & Box textAlign="center".

const StyledPriceTextTypography = styled(Typography)`
  font-weight: ${props => props.theme.typography.fontWeightBold};
  color: ${props => props.theme.palette.primary};
`

// Don't forget to use component="section"
// const StyledSectionBox = styled(Box)`
// `

const Pricing = ({data}) => (
  <Grid container>
    {data.map(price => (
      <Grid item xs={4} key={price.plan}>
        <Box component="section">
          <Typography component="div" variant="h4">
            <Box textAlign="center" fontWeight={600}>
              {price.plan}
            </Box>
          </Typography>
          <StyledPriceTextTypography variant="h2" align="center">
            ${price.price}
          </StyledPriceTextTypography>
          <Typography component="div" paragraph>
            <Box fontWeight={600}>
              {price.description}
            </Box>
          </Typography>
          <List>
            {price.items.map(item => (
              <ListItem key={item}>
                <Typography variant="h6">{item}</Typography>
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
