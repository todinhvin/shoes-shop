import React, { useEffect, useState } from 'react';

function Pagination(props) {
  const { center, handlePagi, totalItems, itemPerPage } = props;

  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemPerPage: itemPerPage,
    totalItems: 0,
  });
  useEffect(() => {
    setPagination({
      ...pagination,
      itemPerPage: itemPerPage,
      totalItems: totalItems,
    });
  }, [itemPerPage, totalItems]);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const totalPages = Math.ceil(pagination.totalItems / pagination.itemPerPage);
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  const showPagination = () => {
    let result;
    result = pages.map(number => {
      if (number > minPageNumberLimit && number < maxPageNumberLimit + 1) {
        return (
          <li
            className={pagination.currentPage === number ? 'active' : ''}
            key={number}
            onClick={handleClick}
            value={number}
          >
            {number}
          </li>
        );
      } else return null;
    });
    return result;
  };
  const handleClick = event => {
    const number = event.target.value;
    if (pagination.currentPage !== +number) {
      setPagination({
        ...pagination,
        currentPage: +number,
      });
      handlePagi(event.target.value);
    }
  };
  const handleNextBtn = event => {
    event.preventDefault();
    setPagination({
      ...pagination,
      currentPage: pagination.currentPage + 1,
    });
    handlePagi(event.target.value);
    if (pagination.currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePreBtn = event => {
    event.preventDefault();
    setPagination({
      ...pagination,
      currentPage: pagination.currentPage - 1,
    });
    handlePagi(event.target.id);
    if ((pagination.currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  let style;
  if (center) {
    style = { marginLeft: 'auto', marginRight: 'auto' };
  }
  let disablePre = pagination.currentPage <= 1 ? 'disabled-btn' : '';
  let disableNext =
    pagination.currentPage >= pages.length ? 'disabled-btn' : '';
  return (
    <div className="row" style={style}>
      <div className="col-md-12 text-center">
        <div className="block-27">
          <ul className="pagination">
            <li onClick={handlePreBtn} className={`${disablePre} pagination`}>
              <a href="/#">
                <i className="ion-ios-arrow-back"></i>
              </a>
            </li>
            {showPagination()}

            <li onClick={handleNextBtn} className={`${disableNext} pagination`}>
              <a href="/#">
                <i className="ion-ios-arrow-forward"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
