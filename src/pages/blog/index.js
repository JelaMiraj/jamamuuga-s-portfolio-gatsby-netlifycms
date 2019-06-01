// // eslint-disable-next-line
// import {withRoot} from "../../tools"
// // eslint-disable-next-line
import React, {Component} from "react"
// import {withStyles} from "@material-ui/core/styles"
import {BlogRoll, Layout} from "../../components"
// import myTheme from "../../styles/themes/theme"

class BlogIndexPage extends Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url("/img/blog-index.jpg")`,
                }}
              >
                <h1
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
                    backgroundColor: "#f40",
                    color: "white",
                    padding: "1rem",
                  }}
                >
                  Latest Stories
                </h1>
              </div>
            </div>
            <BlogRoll />
          </div>
        </section>
      </Layout>
    )
  }
}

// FIXME: Somehow, trying to use withStyles this way fails
// export default withRoot(withStyles(myTheme)(BlogIndexPage))
// export default withRoot(BlogIndexPage)
// export default withStyles(myTheme)(BlogIndexPage)
export default BlogIndexPage
