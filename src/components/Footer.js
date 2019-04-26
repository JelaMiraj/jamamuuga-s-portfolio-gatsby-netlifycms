import React from "react"
import {StaticQuery, graphql} from "gatsby"
import {Divider, Hidden, Typography} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import {withStyles} from "@material-ui/styles"
import {Link} from "."

const styles = theme => ({
  divider: {
    marginTop: theme.spacing.unit * 6,
    marginBottom: theme.spacing.unit * 3,
  },
  footer: {
    marginBottom: theme.spacing.unit * 3,
    whiteSpace: 'nowrap',
  }
})

// FIXME: Many levels of indirection is a code smell & needs to be seperated into abstractions.
const Footer = withStyles(styles)(props => {
const {
    classes,
    data: {
      site: {
        siteMetadata: {
          title,
          contact: { email, phone },
        },
      },
    },
  } = props

  return (
    <>
      <Divider className={classes.divider} />
      <Box
        component="footer"
        className={classes.footer
        id="footer"
      >
        <Box component="span">
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
            By <Link to="/">Jason Cady</Link>
          </Typography>
        </Box>
      </Box>
    </>
  )
})

const FooterQuery = props => (
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

// TODO: Convert this into one of the right abstractions for this concept.
// TODO: Make sure this doesn't not get used and break styles because FooterQuery is the one being exported as default.
// const FooterStyled = withStyles(styles)(Footer)

export default FooterQuery
export {FooterQuery as Footer}
