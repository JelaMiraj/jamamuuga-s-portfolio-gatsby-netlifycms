import React from "react"
import {List, ListItem, ListItemText} from "@material-ui/core"
import styled from "styled-components"
import {Link} from "."
// Pagination for posts.

// const StyledLink = styled(Link)`
// `

const StyledList = styled(List)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`

const StyledListItem = styled(ListItem)`
  margin: 0;
`

// TODO: Convert generated styling to Material UI with Styled Components.
const linkStyle = (i, currentPage) => ({
  padding: 10,
  textDecoration: "none",
  color: i + 1 === currentPage ? "#ffffff" : "#D64000",
  background: i + 1 === currentPage ? "#D64000" : "",
})

const Pagination = ({currentPage, numPages}) => {
  const isFirst = currentPage === 1
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const isLast = currentPage === numPages
  const nextPage = (currentPage + 1).toString()

  return (
    <StyledList>
      {!isFirst && (
        <Link to={prevPage} rel="prev" className="has-text-primary">
          ← Previous Page
        </Link>
      )}
      {Array.from({length: numPages}, (_, i) => (
        <StyledListItem key={`pagination-number${i + 1}`}>
          <Link
            to={`/${i === 0 ? "" : i + 1}`}
            style={linkStyle(i, currentPage)}
          >
            {i + 1}
          </Link>
        </StyledListItem>
      ))}
      {!isLast && (
        <Link to={nextPage} rel="next" className="has-text-primary">
          Next Page →
        </Link>
      )}
    </StyledList>
  )
}

// TODO, add propTypes
// Pagination.propTypes = {}

export default Pagination
