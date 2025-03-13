import React from "react";
import styles from "./pagination.module.css";
import Button from "../common/Button";

const Pagination = ({ storiesPerPage, totalStories, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStories / storiesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.pagination}>
      <ul className={styles.paginationList}>
        {pageNumbers.map(number => (
          <li key={number} className={styles.paginationItem}>
            <Button
              onClick={() => paginate(number)}
              className={`${styles.paginationLink} ${currentPage === number ? styles.active : ''}`}
            >
              {number}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;