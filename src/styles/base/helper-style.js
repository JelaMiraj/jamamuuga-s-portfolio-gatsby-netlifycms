import styled from "styled-components"

// Helper Classes
// TODO: Maybe separate out into separate classes, files, or at least variables.
// FIXME: What is the right constructor?
const HelperStyle = styled.div`
  .full-width-image-container {
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

  .margin-top-0 {
    margin-top: 0 !important;
  }
`
export default HelperStyle
export {HelperStyle}
