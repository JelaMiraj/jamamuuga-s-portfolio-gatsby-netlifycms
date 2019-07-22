import React from "react"
import {List, ListItem, ListItemText} from "@material-ui/core"
import {Link} from "."
// Pagination for posts.

const unorderedListStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  listStyle: "none",
}

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
    <ul style={unorderedListStyle}>
      {!isFirst && (
        <Link to={prevPage} rel="prev" className="has-text-primary">
          ← Previous Page
        </Link>
      )}
      {Array.from({length: numPages}, (_, i) => (
        <li
          key={`pagination-number${i + 1}`}
          style={{
            margin: 0,
          }}
        >
          <Link
            to={`/${i === 0 ? "" : i + 1}`}
            style={linkStyle(i, currentPage)}
          >
            {i + 1}
          </Link>
        </li>
      ))}
      {!isLast && (
        <Link to={nextPage} rel="next" className="has-text-primary">
          Next Page →
        </Link>
      )}
    </ul>
  )
}

// TODO, add propTypes
// Pagination.propTypes = {}

export default Pagination
