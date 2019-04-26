// eslint-disable-next-line
import withRoot from "../tools/withRoot"
// eslint-disable-next-line
import React from "react"
import {Typography} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import {Layout} from "../components"

const NotFoundPage = () => (
  <Layout title="Not Found">
    <Box className="content">
      <Typography variant="h1">Not Found</Typography>
      <Typography paragraph>
        You just hit a route that doesn&#39;t exist...
      </Typography>
    </Box>
  </Layout>
)

// TODO: Make sure withRoot call isn't breaking stuff.
const NotFoundPageWrapped = withRoot(NotFoundPage)

export default NotFoundPageWrapped
export {NotFoundPageWrapped as NotFoundPage}
