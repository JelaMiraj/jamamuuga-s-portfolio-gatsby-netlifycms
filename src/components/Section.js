import {Grid} from "@material-ui/core"
import {styled} from "@material-ui/core/styles"
// Originally from: https://github.com/danielmahon/gatsby-starter-procyon/blob/netlifycms/src/components/Section.js

const Section = styled(Grid, {
  component: "section",
  spacing: 16,
  justify: "center",
  container: true,
})(theme => ({
  padding: "2em 0 4em 0",
}))

export default Section
