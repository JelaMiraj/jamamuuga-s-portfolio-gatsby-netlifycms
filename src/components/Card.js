import React from "react"
import {
  Card as MuiCard,
  CardActions,
  CardContent,
  CardHeader,
} from "@material-ui/core"
import styled from "styled-components"

const StyledCardActions = styled(CardActions)`
  float: right;
`

const Card = ({
  children,
  // classes,
  title,
  subheader,
  avatar,
  action,
  style = {},
}) => (
  <MuiCard style={style}>
    <CardHeader
      avatar={avatar || null}
      title={title}
      subheader={subheader || null}
    />
    <CardContent>{children}</CardContent>
    <StyledCardActions>{action}</StyledCardActions>
  </MuiCard>
)

export default Card
// export {Card}
