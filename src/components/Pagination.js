import React from "react"
import {List, ListItem, ListItemText, makeStyles} from "@material-ui/core"
import {Link} from "."
// Pagination for posts.

// TODO: Convert styling to Material UI Styles
const useStyles = makeStyles({
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    listStyle: "none",
  },
  // link: {
  // },
})

// const unorderedListStyle = {
//   display: "flex",
//   flexWrap: "wrap",
//   justifyContent: "space-between",
//   alignItems: "center",
//   listStyle: "none",
// }

const linkStyle = (i, currentPage) => ({
  padding: 10,
  textDecoration: "none",
  color: i + 1 === currentPage ? "#ffffff" : "#D64000",
  background: i + 1 === currentPage ? "#D64000" : "",
})

const Pagination = ({currentPage, numPages}) => {
  const classes = useStyles()
  const isFirst = currentPage === 1
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const isLast = currentPage === numPages
  const nextPage = (currentPage + 1).toString()

  //    {/* <List style={unorderedListStyle}> */}
  return (
    <List className={classes.list}>
      {!isFirst && (
        <Link to={prevPage} rel="prev" className="has-text-primary">
          ← Previous Page
        </Link>
      )}
      {Array.from({length: numPages}, (_, i) => (
        <ListItem
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
        </ListItem>
      ))}
      {!isLast && (
        <Link to={nextPage} rel="next" className="has-text-primary">
          Next Page →
        </Link>
      )}
    </List>
  )
}

// TODO, add propTypes
// Pagination.propTypes = {}

export default Pagination
