import React from 'react'
// import {Link} from 'gatsby'
import Typography from '@material-ui/core'
import Link from './Link'
// Intended for use in site or blog index page.

const PostItem = ({ post, logged }) => {
  const cntBorder = {
    // border: '1px solid #888',
    borderBottomWidth: 1,
    borderBottomColor: '#888',
    borderBottomStyle: 'solid', // this attribute doesn't auto complete???
    padding: '1em 0',
    display: 'flex', // horizontal align thumbnail and text ...
  }

  return (
    <div className="content" style={cntBorder} key={post.id}>
      {/** @2018/12/17 */}
      <img
        src={post.frontmatter.image.childImageSharp.fluid.src}
        className="thumbnail-img"
        alt="post thumbnail"
      />
      <div className="post-item">
        <Typography paragraph variant="h4" className="post-title">
          <Link
            className={logged ? 'has-text-primary' : 'has-text-unlogin'}
            to={logged ? post.fields.slug : '/login'}
          >
            {post.frontmatter.title}
          </Link>
          <span> &bull; </span>
          <small>{post.frontmatter.date}</small>
        </Typography>
        <Typography paragraph>
          <span className="post-excerpt">{post.excerpt}</span>
          <Link
            className={logged ? 'button is-small orange' : 'button is-small'}
            to={logged ? post.fields.slug : '/login'}
          >
            Keep Reading →
          </Link>
        </Typography>
      </div>
    </div>
  )
}

export default PostItem
