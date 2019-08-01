// TODO: Convert to hooks api & makeStyles instead of styled.
// Helper Classes
// TODO: Maybe separate out into separate classes, files, or at least variables.
import {styled} from "@material-ui/core"

const helperStyle = styled("div")({
  // TODO: Find out if custom css classes should stand on their own instead of being "&" subs under root.
  root: {
    "& .full-width-image-container": {
      width: "100vw",
      height: "400px",
      position: "relative",
      left: "50%",
      right: "50%",
      margin: "5em -50vw",
      "background-size": "cover",
      "background-position": "bottom",
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
    },

    "& .margin-top-0": {
      "margin-top": "0 !important",
    },
  },
})

export default helperStyle
