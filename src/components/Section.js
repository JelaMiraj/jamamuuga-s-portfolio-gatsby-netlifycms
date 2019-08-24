import React from "react"
import {Grid} from "@material-ui/core"
import styled from "styled-components"
// Originally from: https://github.com/danielmahon/gatsby-starter-procyon/blob/netlifycms/src/components/Section.js

const StyledSectionGrid = styled(Grid)`
  padding: 2em 0 4em 0;
`

const Section = props => {
  const {children, classes} = props

  return (
    <StyledSectionGrid
      component="section"
      spacing="2"
      justify="center"
      container
    >
      {children}
    </StyledSectionGrid>
  )
}

export default Section
