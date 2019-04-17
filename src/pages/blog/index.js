// eslint-disable-next-line
import withRoot from "../../tools/withRoot"
// eslint-disable-next-line
import React, {Component} from "react"
import {Typography} from "@material-ui/core"
// import {Container} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import {BlogRoll, Layout} from "../../components"

class BlogIndexPage extends Component {
  render() {
    return (
      <Layout>
        <Box component="section">
          <Box px={[2, 3, 4]} mx="auto" maxWidth={1280} className="container">
            <Box>
              <Box
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url("/img/blog-index.jpg")`,
                }}
              >
                <Typography
                  variant="h1"
                  fontWeight="fontWeightBold"
                  fontSize="fontSize1"
                  style={{
                    boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
                    backgroundColor: "#f40",
                    color: "white",
                    padding: "1rem",
                  }}
                >
                  Latest Stories
                </Typography>
              </Box>
            </Box>
            <BlogRoll />
          </Box>
        </Box>
      </Layout>
    )
  }
}

const BlogIndexPageWrapped = withRoot(BlogIndexPage)

export default BlogIndexPageWrapped
export {BlogIndexPageWrapped as Blog}
