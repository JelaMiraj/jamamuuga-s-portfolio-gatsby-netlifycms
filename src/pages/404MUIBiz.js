// eslint-disable-next-line
import withRoot from "../tools/withRoot"
// eslint-disable-next-line
import React, {Component} from "react"
import {Typography} from "@material-ui/core"
import Page from "../components/Page"

class NotFoundPage extends Component {
  render() {
    return (
      <Page title="Not Found">
        <Typography paragraph>
          Hey! You just hit a page that doesn&#39;t exist...
        </Typography>
      </Page>
    )
  }
}

const NotFoundPageWrapped = withRoot(NotFoundPage)

export default NotFoundPageWrapped
export {NotFoundPageWrapped as NotFoundPageMUIBiz}
