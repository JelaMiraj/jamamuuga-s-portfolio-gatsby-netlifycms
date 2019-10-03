import styled from "styled-components/macro"

const ContentStyle = styled.div`
  & .taglist {
    list-style: none;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 1.5rem;
    margin-top: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;

    & .li {
      padding: 0 2rem 1rem 0;
      margin-bottom: 1.5rem;
      margin-top: 0;
    }
  }
`

export default ContentStyle
