// eslint-disable-next-line
import withRoot from "../../tools/withRoot"
// eslint-disable-next-line
import React from "react"
import {Typography} from "@material-ui/core"
// import {Container} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import {Layout} from "../../components"

const Thanks = () => (
  <Layout>
    <Box component="section">
      <Box px={[2, 3, 4]} mx="auto" maxWidth={1280} className="container">
        <Box className="content">
          <Typography variant="h1">Thank you!</Typography>
          <Typography paragraph>
            This is a custom thank you page for form submissions.
          </Typography>
        </Box>
      </Box>
    </Box>
  </Layout>
)

const ThanksWrapped = withRoot(Thanks)

export default ThanksWrapped
export {ThanksWrapped as Thanks}
