// eslint-disable-next-line
import withRoot from "../../tools/withRoot"
// eslint-disable-next-line
import React, {Component} from "react"
// TODO: Use the meta component TextField for applicable input & forms.
import {
  Button,
  // Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Hidden,
  Icon,
  Input,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import {navigate} from "gatsby"
import {Layout} from "../../components"

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")
}

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {isValidated: false}
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
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
          <Box px={[2, 3, 4]} mx="auto" maxWidth={1280} className="container">
            <Box className="content">
              <Typography variant="h1">Contact</Typography>
              <Form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <Input type="hidden" name="form-name" value="contact" />
                <Hidden>
                  <InputLabel>
                    Don’t fill this out:{" "}
                    <Input name="bot-field" onChange={this.handleChange} />
                  </InputLabel>
                </Hidden>
                <FormGroup className="field">
                  <InputLabel className="label" htmlFor="name">
                    Your name
                  </InputLabel>
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
                <FormGroup className="field">
                  <InputLabel className="label" htmlFor="email">
                    Email
                  </InputLabel>
                  <FormControl>
                    <Input
                      className="input"
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                      id="email"
                      required
                    />
                  </FormControl>
                </FormGroup>
                <FormGroup className="field">
                  <InputLabel className="label" htmlFor="message">
                    Message
                  </InputLabel>
                  <FormControl>
                    <OutlinedInput
                      className="textarea"
                      name="message"
                      onChange={this.handleChange}
                      id="message"
                      required
                    />
                  </FormControl>
                </FormGroup>
                <FormGroup className="field">
                  <Button variant="contained" className="is-link" type="submit">
                    Send
                    <Icon>send</Icon>
                  </Button>
                </FormGroup>
              </Form>
            </Box>
          </Box>
        </Box>
      </Layout>
    )
  }
}

const IndexWrapped = withRoot(Index)

export default IndexWrapped
export {IndexWrapped as Index}
