import React from "react"
import Layout from "../components/Layout"
import withRoot from "../utils/withRoot"

const NotFoundPage = () => (
  <Layout title="Not Found">
    <div>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </div>
  </Layout>
)

// TODO: Make sure withRoot call isn't breaking stuff.
export default withRoot(NotFoundPage)
