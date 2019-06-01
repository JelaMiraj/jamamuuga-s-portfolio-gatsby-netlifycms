import React from "react"
import {StaticQuery, graphql} from "gatsby"
import {Divider, Hidden, Typography} from "@material-ui/core"
import {withStyles} from "@material-ui/core/styles"

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const styles = theme => ({
  divider: {
    marginTop: theme.spacing.unit * 6,
    marginBottom: theme.spacing.unit * 3,
  },
  footer: {
    marginBottom: theme.spacing.unit * 3,
    whiteSpace: "nowrap",
  },
})

const Footer = withStyles(styles)(props => {
  const {
    classes,
    data: {
      site: {
        siteMetadata: {
          title,
          contact: {email, phone},
        },
      },
    },
  } = props

  return (
    <>
      <Divider className={classes.divider} />
      <footer className={classes.footer} id="footer">
        <span>
          <Typography variant="caption" component="span">
            ©{new Date().getFullYear()} {title}{" "}
            <Hidden only={["xs", "sm"]}>–</Hidden>
            <Hidden only={["xl", "lg", "md"]}>
              <br />
            </Hidden>{" "}
            {/* {email} – {phone} */}
            <br />
            &middot;
            <br />
            By <a href="https://jasoncadydesigns.netlify.com">Jason Cady</a>
          </Typography>
        </span>
      </footer>
    </>
  )
})

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
)
