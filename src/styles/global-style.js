import React from "react"
import {CssBaseline} from "@material-ui/core"
// import styled, {createGlobalStyle} from "styled-components"
// import reboot from "styled-reboot"
// TODO: Import a proper Styled System theme here instead of a separate pure color object.
import colors from "./themes/colors"

const options = {}

// const rebootCss = reboot(/* options */)

// const GlobalStyle = createGlobalStyle`
//   ${rebootCss}
// `
const GlobalStyle = () => (
  <>
    <CssBaseline />
  </>
)

export default GlobalStyle
// export {GlobalStyle}
