import React from "react"
import {Box, Container, Typography} from "@material-ui/core"
import {Layout} from "../../components"

const Thanks = () => (
  <Layout>
    <Box component="section" className="section">
      <Container className="container">
        <Box className="content">
          <Typography variant="h1">Thank you!</Typography>
          <Typography paragraph>
            This is a custom thank you page for form submissions
          </Typography>
        </Box>
      </Container>
    </Box>
  </Layout>
)

export default Thanks
