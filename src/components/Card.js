import React from "react"
import {
  Card as MuiCard,
  CardActions,
  CardContent,
  CardHeader,
} from "@material-ui/core"
import {withStyles} from "@material-ui/core/styles"

const styles = {
  cardActions: {
    float: "right",
  },
}

const Card = ({
  children,
  classes,
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
    <CardActions className={classes.cardActions}>{action}</CardActions>
  </MuiCard>
)

//     <CardActions style={{float: "right"}}>{action}</CardActions>

// export default Card
export default withStyles(styles)(Card)
// export {Card}
