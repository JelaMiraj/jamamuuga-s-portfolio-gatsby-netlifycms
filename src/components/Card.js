import React from "react"
// import {Card} from "mdi-material-ui"
import {
  Card as InnerCard,
  CardActions,
  CardContent,
  CardHeader,
} from "@material-ui/core"
// TODO: Only use custom Card everywhere.

const Card = ({children, title, subheader, avatar, action, style = {}}) => (
  <InnerCard style={style}>
    <CardHeader
      avatar={avatar || null}
      title={title}
      subheader={subheader || null}
    />
    <CardContent>{children}</CardContent>
    <CardActions style={{float: "right"}}>{action}</CardActions>
  </InnerCard>
)

export default Card
export {Card}
