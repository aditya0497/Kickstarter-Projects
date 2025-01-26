import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handleDropdownChange = (event) => {
    const selectedPage = parseInt(event.target.value);
    onPageChange(selectedPage);
  };

  return (
    <div className="pagination" role="navigation" aria-label="Pagination controls">
      <button
        className="page-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        Prev
      </button>

      <select
        value={currentPage}
        onChange={handleDropdownChange}
        className="page-dropdown"
        aria-label="Select page"
      >
        {Array.from({ length: totalPages }, (_, index) => (
          <option key={index} value={index + 1}>
            Page {index + 1}
          </option>
        ))}
      </select>

      <button
        className="page-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
