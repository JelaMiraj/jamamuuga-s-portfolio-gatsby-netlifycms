import React from "react"
import {Container, Typography} from "@material-ui/core"
import {Layout} from "../components"

const NotFoundPage = props => (
  <Layout title="Not Found">
    <Container>
      <Typography variant="h1">Not Found</Typography>
      <Typography variant="p">Alas, you just hit a page that doesn&#39;t exist...</Typography>
    </Container>
  </Layout>
)

export default NotFoundPage
