import React, { useRef, useState } from 'react';
function Search(props) {
  const { handleSearch } = props;
  const [searchValue, setSearchValue] = useState('');
  const typingTimeoutRef = useRef(null);
  const hadleSearchValue = event => {
    let value = event.target.value;
    setSearchValue(value);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      handleSearch(value);
    }, 300);
  };
  return (
    <div className="col-sm-5 col-md-3 btnSearch">
      <form action="#" className="search-wrap">
        <div className="form-group">
          <input
            type="search"
            value={searchValue}
            className="form-control search"
            placeholder="Search"
            onChange={hadleSearchValue}
          />
          <button
            disabled
            className="btn btn-primary submit-search text-center"
            type="submit"
          >
            <i className="icon-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
