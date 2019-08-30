import React from "react"
import {Box, Container, Typography} from "@material-ui/core"
import styled from "styled-components/macro"
import {BlogRoll, Content, Layout} from "../../components"

// TODO: import more inline styling to here.
const StyledBackgroundImageBox = styled(Box)`
  width: 100vw;
  height: 400px;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 5em -50vw;
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0 !important;
`

const StyledTypography = styled(Typography)`
  /* Contains .full-width-image-container and .margin-top-0 */
  /* box-shadow: 0.5rem 0 0 #f40, -0.5rem 0 0 #f40; */
  box-shadow: 0.5rem 0 0 ${props => props.theme.palette.primary.main},
    -0.5rem 0 0 ${props => props.theme.palette.primary.main};
  /* background-color: #f40; */
  background-color: ${props => props.theme.palette.primary.main};
  color: white;
  padding: 1rem;
  width: 100vw;
  height: 400px;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 5em -50vw;
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0 !important;
`

const BlogIndexPage = props => (
  <Layout>
    <StyledBackgroundImageBox
      style={{
        backgroundImage: `url("/images/blog-index.jpg")`,
      }}
    >
      <StyledTypography variant="h3" fontWeight="fontWeightBold">
        Latest Stories
      </StyledTypography>
    </StyledBackgroundImageBox>
    <Box component="section">
      <Container className="container">
        <Box className="content">
          <BlogRoll />
        </Box>
      </Container>
    </Box>
  </Layout>
)

export default BlogIndexPage
