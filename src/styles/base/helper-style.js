// Helper Classes
import styled from "styled-components"
// TODO: Maybe separate out into separate classes, files, or at least variables.
// TODO: Find out recommended way to mix styles with Styled Components.
// TODO: Find out all instances of original margin-top-0 and add !important.

const helperStyle = styled.div`
  /* TODO: Find out if custom css classes should stand on their own instead of being "&" subs under root. */
  & .full-width-image-container {
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
  }

  & .margin-top-0 {
    margin-top: 0 !important;
  }
`

export default helperStyle
