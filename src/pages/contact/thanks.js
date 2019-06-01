// eslint-disable-next-line
import {withRoot} from "../../tools"
// eslint-disable-next-line
import React from "react"
import {Layout} from "../../components"

const Thanks = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you!</h1>
          <p>This is a custom thank you page for form submissions</p>
        </div>
      </div>
    </section>
  </Layout>
)

export default withRoot(Thanks)
