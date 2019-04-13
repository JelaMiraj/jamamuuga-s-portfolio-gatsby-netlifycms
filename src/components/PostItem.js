import React from "react"
import {Typography} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import {PreviewCompatibleImage as Image} from "./PreviewCompatibleImage"
import Link from "./Link"
// Intended for use in site or blog index page.
// TODO: Maybe use Card if not wrapped by caller.

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
      <Image
        src={post.frontmatter.image.childImageSharp.fluid.src}
        className="thumbnail-img"
        alt="post thumbnail"
      />
      <Box className="post-item">
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
          <Typography component="span" className="post-excerpt">
            {post.excerpt}
          </Typography>
          <Link
            className={logged ? "button is-small orange" : "button is-small"}
            to={logged ? post.fields.slug : "/login"}
          >
            Keep Reading →
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default PostItem
export {PostItem}
