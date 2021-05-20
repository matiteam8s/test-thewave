import React from "react";
import "./Pagination.css";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  paginationItem: {
    "& .Mui-selected": {
      backgroundColor: "#5738FF",
      color: "#FFF",
    },
    "& .Mui-selected:hover": {
      backgroundColor: "#5738FF",
      color: "#FFF",
    },
  },
}));

const BottomPagination = ({
  productsPerPage,
  totalProducts,
  setCurrentPage,
  currentPage,
}) => {
  const classes = useStyles();
  const pageNumbers = [];

  // Get total nr of pages
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleChange = (e, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="pagination">
      <div
        className="pagination__prev"
        onClick={() => setCurrentPage((page) => page - 1)}
      >
        <span>&#8249;</span> Prev
      </div>
      <div className="pagination__pages">
        <Pagination
          className={classes.paginationItem}
          count={pageNumbers.length}
          hidePrevButton
          hideNextButton
          page={currentPage}
          onChange={handleChange}
        />
      </div>
      <div
        className="pagination__next"
        onClick={() => setCurrentPage((page) => page + 1)}
      >
        Next <span>&#8250;</span>
      </div>
    </div>
  );
};

export default BottomPagination;
