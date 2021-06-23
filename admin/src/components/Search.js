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
    <div className="col-sm-12 col-md-6 ">
      <input
        type="text"
        name="searchVal"
        id="inputsearchVal"
        className="form-control"
        value={searchValue}
        required="required"
        pattern=""
        title=""
        placeholder="Search name"
        onChange={hadleSearchValue}
      />
    </div>
  );
}

export default Search;
