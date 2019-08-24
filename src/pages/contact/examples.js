import React from "react"
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core"
import {Content, Layout, Link, LinkExternal} from "../../components"
// FIXME: Use "Reaptcha" on all form submissions (both text & file upload).

const Index = props => {
  const {classes} = props

  return (
    <Layout>
      <Box component="section" className="section">
        <Container className="container">
          <Box className="content">
            <Typography variant="h1">Hi people</Typography>
            <Typography paragraph>
              This is an example site integrating Netlify’s form handling with
              Gatsby
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  <Link to="/contact">Basic contact form</Link>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Link to="/contact/file-upload/">Form with file upload</Link>
                </ListItemText>
              </ListItem>
            </List>

            <Typography variant="h2">Troubleshooting</Typography>
            <Typography variant="h3">
              Forms stop working after upgrading to Gatsby v2
            </Typography>
            <Typography paragraph>
              This can be caused by the offline-plugin.{" "}
              <LinkExternal
                title="Workaround"
                href="https://github.com/gatsbyjs/gatsby/issues/7997#issuecomment-419749232"
              />{" "}
              is to use <code>?no-cache=1</code> in the POST url to prevent the
              service worker from handling form submissions
            </Typography>
            <Typography variant="h3">Adding reCAPTCHA</Typography>
            <Typography paragraph>
              If you are planning to add reCAPTCHA please go to{" "}
              <LinkExternal
                title="imorente/gatsby-netlify-form-example"
                href="https://github.com/imorente/gatsby-netlify-form-example"
              />{" "}
              for a working example.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export default Index
