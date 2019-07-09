import React, {useState} from "react"
import {navigate} from "gatsby"
import {Button, Container, Typography} from "@material-ui/core"
import {Content, Layout, Link} from "../../components"
// TODO: Port this to material-ui-popup-state
// TODO: Use proper Material UI form handling.

const encode = (data) => {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

const Contact = props => {
  const {classes} = props
  const [state, setState] = useState({})

  const handleChange = event => {
    setState({...state, [event.target.name]: event.target.value})
  }

  const handleAttachment = event => {
    setState({[event.target.name]: event.target.files[0]})
  }

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    fetch("/", {
      method: "POST",
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
      <section className="section">
        <Container className={classes.container}>
          <div className="content">
            <Typography variant="h1">File Upload</Typography>
            <form
              name="file-upload"
              method="post"
              action="/contact/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="file-upload" />
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
                <div className="file">
                  <label className="file-label">
                    <input
                      className="file-input"
                      type="file"
                      name="attachment"
                      onChange={handleAttachment}
                    />
                    <span className="file-cta">
                      <span className="file-label">Choose a file…</span>
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <button className="button is-link" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default Contact
