import React from "react"
import {StaticQuery, graphql} from "gatsby"
import {Divider, Hidden, Typography} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import {withStyles} from "@material-ui/styles"
import {Link} from "."

const Footer = props => {
  const {
    title,
    contact: {email, phone},
  } = props.data.site.siteMetadata

  return (
    <>
      <Divider style={{marginTop: "48px", marginBottom: "24px"}} />
      <Box
        component="footer"
        style={{marginBottom: "24px", whiteSpace: "nowrap"}}
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
}

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

export default FooterQuery
export {FooterQuery as Footer}
