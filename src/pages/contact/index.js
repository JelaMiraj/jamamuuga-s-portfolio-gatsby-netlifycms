import React, {useState} from "react"
import {navigate} from "gatsby"
import {Box, Container, Typography} from "@material-ui/core"
import {Button} from "gatsby-theme-material-ui"
import {Content, Layout} from "../../components"
// FIXME: Use "Reaptcha" on all form submissions (both text & file upload).
// TODO: Port this to material-ui-popup-state
// TODO: Convert Button from Bulma to Material UI.
// TODO: Use proper Material UI form handling.
// FIXME: Finish porting to hooks/function style from classes.

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")

const Index = props => {
  // const {classes} = props
  // Commented out old state variable from the original class version. Have since changed to functions/hooks.
  // const state = {isValidated: false}
  const [state, setState] = useState({})

  const handleChange = event => {
    setState({...state, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    fetch("/", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <Layout>
      <Box component="section" className="section">
        <Container className="container">
          <Box className="content">
            <Typography variant="h1">Contact</Typography>
            <form
              name="contact"
              method="post"
              action="/contact/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={handleChange} />
                </label>
              </div>
              <div className="field">
                <label className="label" htmlFor="name">
                  Your name
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    id="name"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="message">
                  Message
                </label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name="message"
                    onChange={handleChange}
                    id="message"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <button className="button is-link" type="submit">
                  Send
                </button>
              </div>
            </form>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export default Index
