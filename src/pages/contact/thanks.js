// eslint-disable-next-line
import withRoot from "../../tools/withRoot"
// eslint-disable-next-line
import React from "react"
import {Container, Typography} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import Layout from "../../components/Layout"

const Thanks = () => (
  <Layout>
    <Box component="section">
      <Container>
        <Box>
          <Typography variant="h1">Thank you!</Typography>
          <Typography paragraph>
            This is a custom thank you page for form submissions.
          </Typography>
        </Box>
      </Container>
    </Box>
  </Layout>
)

const ThanksWrapped = withRoot(Thanks)

export default ThanksWrapped
export {ThanksWrapped as Thanks}
