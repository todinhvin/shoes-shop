import React, { useEffect, useState } from 'react';

function Pagination(props) {
  const { center, handleSet, totalProducts } = props;
  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemPerPage: 12,
    totalItems: 0,
  });
  useEffect(() => {
    setPagination({
      ...pagination,
      totalItems: totalProducts,
    });
  }, [totalProducts]);

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
            style={{ cursor: 'pointer' }}
            className={
              pagination.currentPage === number ? 'active ' : 'pagination'
            }
            key={number}
            onClick={handleClick}
          >
            <span id={number}>{number}</span>
          </li>
        );
      } else return null;
    });
    return result;
  };
  const handleClick = event => {
    if (pagination.currentPage !== +event.target.id) {
      setPagination({
        ...pagination,
        currentPage: +event.target.id,
      });
      handleSet({
        type: 'pagination',
        value: {
          pageNumber: +event.target.id,
          pageSize: pagination.itemPerPage,
        },
      });
    }
  };
  const handleNextBtn = event => {
    event.preventDefault();
    setPagination({
      ...pagination,
      currentPage: pagination.currentPage + 1,
    });
    handleSet({
      type: 'pagination',
      value: {
        pageNumber: pagination.currentPage + 1,
        pageSize: pagination.itemPerPage,
      },
    });
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
    handleSet({
      type: 'pagination',
      value: {
        pageNumber: pagination.currentPage - 1,
        pageSize: pagination.itemPerPage,
      },
    });
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
          <ul>
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
