import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
/* This destructuring is the same as passing the props as ARGS of the Pagination method
  const { itemsCount, pageSize, onPageChange, currentPage } = props; */

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);


  return ( 
    <nav aria-label="Page navigation example">
      <ul className="pagination">
      { pages.map(page =>(
        <li 
          key={page} 
          className={page === currentPage ? 'page-item active' : 'page-item'}
        >
        <a href='# ' className="page-link" onClick={() => onPageChange(page)}>
           {page}
        </a>
        </li>
        ))}
      </ul>
    </nav>
  );
}

//Library that lets decide the type of the PROPS we receive, and if they are required or not
Pagination.propTypes = { //in this case- type .NUMBER for all
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;