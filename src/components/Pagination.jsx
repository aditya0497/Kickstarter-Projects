import React from "react";
import "../styles/Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    if (pageNumber !== currentPage) {
      onPageChange(pageNumber);
    }
  };

  return (
    <nav aria-label="Pagination Navigation">
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous Page"
        >
          &laquo;
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`pagination-button ${
              currentPage === number ? "active" : ""
            }`}
            onClick={() => handleClick(number)}
            aria-label={`Page ${number}`}
          >
            {number}
          </button>
        ))}

        <button
          className="pagination-button"
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next Page"
        >
          &raquo;
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
