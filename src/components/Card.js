import React from "react"
import {Card, CardActions, CardContent, CardHeader} from "@material-ui/core"
import {withStyles} from "@material-ui/core/styles"

const styles = {
  cardActions: {
    float: "right",
  },
}

const MyCard = ({
  children,
  classes,
  title,
  subheader,
  avatar,
  action,
  style = {},
}) => (
  <Card style={style}>
    <CardHeader
      avatar={avatar || null}
      title={title}
      subheader={subheader || null}
    />
    <CardContent>{children}</CardContent>
    <CardActions className={classes.cardActions}>{action}</CardActions>
  </Card>
)

//     <CardActions style={{float: "right"}}>{action}</CardActions>

// export default MyCard
export default withStyles(styles)(MyCard)
// export {MyCard as Card}
