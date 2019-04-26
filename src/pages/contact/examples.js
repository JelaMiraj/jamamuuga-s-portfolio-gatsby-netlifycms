// eslint-disable-next-line
import withRoot from "../../tools/withRoot"
// eslint-disable-next-line
import {React, Component} from "react"
import {List, ListItem, Typography} from "@material-ui/core"
// import {Container} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import Link from "../../components/Link"
import LinkExternal from "../../components/LinkExternal"
import Layout from "../../components/Layout"

class Index extends Component {
  render() {
    return (
      <Layout>
        <Box component="section">
          <Box px={[2, 3, 4]} mx="auto" maxWidth={1280} className="container">
            <Box className="content">
              <Typography variant="h1">Hi people,</Typography>
              <Typography paragraph>
                This is an example site integrating Netlify’s form handling with Gatsby.
              </Typography>
              <List>
                <ListItem>
                  <Link to="/contact">Basic contact form</Link>
                </ListItem>
                <ListItem>
                  <Link to="/contact/file-upload/">Form with file upload</Link>
                </ListItem>
              </List>

              <Typography variant="h2">Troubleshooting</Typography>
              <Typography variant="h3">
                Forms stop working after upgrading to Gatsby v2.
              </Typography>
              <Typography paragraph>
                This can be caused by the offline-plugin{" "}
                <LinkExternal href="https://github.com/gatsbyjs/gatsby/issues/7997#issuecomment-419749232">
                  Workaround
                </LinkExternal>{" "}
                is to use <code>?no-cache=1</code> in the POST url to prevent
                the service worker from handling form submissions
              </Typography>
              <Typography variant="h3">Adding reCAPTCHA</Typography>
              <Typography paragraph>
                If you are planning to add reCAPTCHA please go to{" "}
                <LinkExternal href="https://github.com/imorente/gatsby-netlify-form-example">
                  imorente/gatsby-netlify-form-example
                </LinkExternal>{" "}
                for a working example.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Layout>
    )
  }
}

const IndexWrapped = withRoot(Index)

export default IndexWrapped
export {IndexWrapped as Examples}
