import React from "react"
import {Box, Typography} from "@material-ui/core"
import {Button} from "gatsby-theme-material-ui"
import Link from "./Link"
// Intended for use in site or blog index page.
// TODO: Convert Button to Material UI from Bulma.

const PostItem = ({post, logged}) => {
  const cntBorder = {
    // border: "1px solid #888",
    borderBottomWidth: 1,
    borderBottomColor: "#888",
    borderBottomStyle: "solid", // this attribute doesn't auto complete???
    padding: "1em 0",
    display: "flex", // horizontal align thumbnail and text ...
  }

  return (
    <Box className="content" style={cntBorder} key={post.id}>
      {/** @2018/12/17 */}
      <img
        src={post.frontmatter.image.childImageSharp.fluid.src}
        className="thumbnail-img"
        alt="post thumbnail"
      />
      <div className="post-item">
        <Typography paragraph variant="h4" className="post-title">
          <Link
            className={logged ? "has-text-primary" : "has-text-unlogin"}
            to={logged ? post.fields.slug : "/login"}
          >
            {post.frontmatter.title}
          </Link>
          <Typography component="span"> &bull; </Typography>
          <Typography component="small">{post.frontmatter.date}</Typography>
        </Typography>
        <Typography paragraph>
          <span className="post-excerpt">{post.excerpt}</span>
          <Link
            className={logged ? "button is-small orange" : "button is-small"}
            to={logged ? post.fields.slug : "/login"}
          >
            Keep Reading →
          </Link>
        </Typography>
      </div>
    </Box>
  )
}

export default PostItem
