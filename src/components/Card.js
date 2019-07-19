import React from "react"
import {
  Card as MuiCard,
  CardActions,
  CardContent,
  CardHeader,
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
  cardActions: {
    float: "right",
  },
})

const Card = ({
  children,
  // classes,
  title,
  subheader,
  avatar,
  action,
  style = {},
}) => {
  const classes = useStyles()

  return (
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
}

//     <CardActions style={{float: "right"}}>{action}</CardActions>

export default Card
// export {Card}
