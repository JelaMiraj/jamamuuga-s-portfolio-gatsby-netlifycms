// // eslint-disable-next-line
// import {withRoot} from "../tools"
// // eslint-disable-next-line
import React from "react"
import {Layout} from "../components"

const NotFoundPage = () => (
  <Layout title="Not Found">
    <div>
      <h1>Not Found</h1>
      <p>Alas, you just hit a page that doesn&#39;t exist...</p>
    </div>
  </Layout>
)

// TODO: Make sure withRoot call isn't breaking stuff.
// export default withRoot(NotFoundPage)
export default NotFoundPage
