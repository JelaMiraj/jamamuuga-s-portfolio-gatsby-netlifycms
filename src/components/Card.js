import React from "react"
import PropTypes from "prop-types"
// import {Card} from "mdi-material-ui"
import {
  Card as InnerCard,
  CardActions,
  CardContent,
  CardHeader,
} from "@material-ui/core"
import {withStyles} from "@material-ui/styles"
// TODO: Only use custom Card everywhere.

const styles = {
  cardActions: {
    float: "right",
  },
}

const Card = ({children, title, subheader, avatar, action, style = {}}) => (
  <InnerCard style={style}>
    <CardHeader
      avatar={avatar || null}
      title={title}
      subheader={subheader || null}
    />
    <CardContent>{children}</CardContent>
    <CardActions className={classes.cardActions}>{action}</CardActions>
  </InnerCard>
)

// Card.PropTypes = {
//   children: PropTypes.node.isRequired,
//   title: PropTypes.string,
//   // subheader: PropTypes.any,
//   // avatar: PropTypes.any,
//   // action: PropTYpes.any,
// }

const CardStyled = withStyles(styles)(Card)

export default CardStyled
export {CardStyled as Card}
