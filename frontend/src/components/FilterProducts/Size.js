import React, { useEffect, useState } from 'react';
import instance from '../../axiosService';
import { handleActive } from './HandleActive';
function Size(props) {
  let [sizes, setSizes] = useState([]);
  const { handleSet, sizeDefault, showAll, setItem, onSetSize } = props;
  useEffect(() => {
    instance
      .get('/sizes')
      .then(resp => {
        setSizes(resp.data);
      })
      .catch(error => console.log(error));
  }, []);

  const showSize = () => {
    let result;
    result = sizes.map((size, index) => {
      let active = sizeDefault === size.name ? 'active-select' : '';
      return (
        <li
          key={index}
          className={`size-${size.id} ${active}`}
          onClick={() => {
            handleActiveSize(`size-${size.id}`, 'active-select', size, setItem);
          }}
        >
          <span className="size-width">{size.name}</span>
        </li>
      );
    });
    return result;
  };
  const handleActiveSize = (elmName, activeName, element, setSelector) => {
    handleActive(elmName, activeName);
    if (!setSelector) {
      handleSet({
        type: 'size',
        value: element.id,
      });
    } else {
      onSetSize({
        name: element.name,
        id: element.id,
      });
    }
  };

  return (
    <div className="block-26 mb-2">
      <h4>Size</h4>
      <ul>{showSize()}</ul>
    </div>
  );
}

export default Size;
