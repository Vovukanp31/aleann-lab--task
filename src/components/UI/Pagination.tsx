import React from 'react';

import css from '../../styles/Pagination.module.css'

interface Props {
    currentPage?: number;
    link?: string;
}

const Pagination = ({currentPage = 2, link = '#'}: Props) => {

    return (
       
<nav aria-label="Page navigation example">
  <ul className={css.paginationContainer}>
    <li>
      <a href="" className={`${css.pageElement} ${css.prevPageBtn}`}>
        <span className="sr-only">Previous</span>
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
      </a>
    </li>
    <li>
      <a href="" className={css.pageElement}>{currentPage - 1}</a>
    </li>
    <li>
      <a href="" aria-current="page" className={`${css.pageElement} border-b-gray-500`}>{currentPage}</a>
    </li>
    <li>
      <a href="" className={css.pageElement}>{currentPage + 1}</a>
    </li>
    <li>
      <a href="" className={css.pageElement}>{currentPage + 2}</a>
    </li>
    <li>
      <a href="" className={css.pageElement}>{currentPage + 3}</a>
    </li>
    <li>
      <a className={css.pageElement}>...</a>
    </li>
    <li>
      <a href="" className={css.pageElement}>18</a>
    </li>
    <li>
      <a href="" className={`${css.pageElement} ${css.nextPageBtn}`}>
        <span className="sr-only">Next</span>
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
      </a>
    </li>
  </ul>
</nav>

    );
};

export default Pagination;