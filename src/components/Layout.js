import React from "react"
import {PropTypes} from "prop-types"
import {ScrollingProvider} from "react-scroll-section"
import {Container, Grid, Typography} from "@material-ui/core"
import styled from "styled-components/macro"
// import GlobalStyle from "../styles/global-style"
import {Footer, Header} from "."
// import {Navbar} from "."
import useSiteMetadata from "./SiteMetadata"

const StyledGridContainer = styled(Grid)`
  margin-top: 94;
`

const StyledContentBoxGridItem = styled(Grid)`
  max-width: calc(1136px - 60px);
  width: calc(100% - 60px);
`

const StyledTitleTypography = styled(Typography)`
  text-align: center;
`

// TODO: Find out if we need any <GlobalStyle />
const Layout = props => {
  const {title, children} = props

  return (
    <>
      <ScrollingProvider>
        <Container>
          {/* <Helmet /> */}
          {/* <GlobalStyle /> */}
          <Header />
          <StyledGridContainer container direction="row" justify="center">
            <StyledContentBoxGridItem item>
              {title ? (
                <StyledTitleTypography variant="h2" gutterBottom>
                  {title}
                </StyledTitleTypography>
              ) : null}
              {children}
              <Footer />
            </StyledContentBoxGridItem>
          </StyledGridContainer>
        </Container>
      </ScrollingProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
// export {Layout}
