// eslint-disable-next-line
import withRoot from "../../tools/withRoot"
// eslint-disable-next-line
import React, {Component} from "react"
// TODO: Use the meta component TextField for applicable input & forms.
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Hidden,
  Icon,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import {CloudUpload} from "@material-ui/icons"
// import {Upload} from "mdi-material-ui"
import {navigate} from "gatsby"
import Layout from "../../components/Layout"

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleAttachment = e => {
    this.setState({[e.target.name]: e.target.files[0]})
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <Box component="section">
          <Container>
            <Box>
              <Typography variant="h1">File Upload</Typography>
              {/* FIXME: Make sure this is the right component. was originally a <form></form> */}
              <Form
                name="file-upload"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <Input type="hidden" name="form-name" value="file-upload" />
                <Hidden>
                  <InputLabel>
                    Don’t fill this out:{" "}
                    <Input name="bot-field" onChange={this.handleChange} />
                  </InputLabel>
                </Hidden>
                <FormGroup>
                  <InputLabel htmlFor="name">Your name</InputLabel>
                  <FormControl>
                    <Input
                      className="input"
                      type="text"
                      name="name"
                      onChange={this.handleChange}
                      id="name"
                      required
                    />
                  </FormControl>
                </FormGroup>
                <FormGroup>
                  {/* File Wrapper Component */}
                  <Box className="file">
                    <InputLabel className="file-label">
                      <Input
                        className="file-input"
                        type="file"
                        name="attachment"
                        onChange={this.handleAttachment}
                      />
                      <Box component="span" className="file-cta">
                        <FormLabel className="file-label">
                          Choose a file…
                        </FormLabel>
                      </Box>
                    </InputLabel>
                  </Box>
                </FormGroup>
                <FormGroup className="field">
                  <Button variant="contained" className="is-link" type="submit">
                    Upload
                    <CloudUpload />
                  </Button>
                </FormGroup>
              </Form>
            </Box>
          </Container>
        </Box>
      </Layout>
    )
  }
}

const ContactWrapped = withRoot(Contact)

export default ContactWrapped
export {ContactWrapped as FileUpload}
