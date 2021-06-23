import React, { useEffect, useState } from 'react';
import instance from '../../axiosService';
import { handleActive } from './HandleActive';
function Width(props) {
  const { handleSet, widthDefault, isProductPage, onSetWidth } = props;
  let [widths, setWidths] = useState([]);
  useEffect(() => {
    instance
      .get('/widths')
      .then(resp => {
        setWidths(resp.data);
      })
      .catch(error => console.log(error));
  }, []);

  // if (!showAll) {
  //   widths = widths.slice(1);
  // }
  const handleActiveWidth = (elmName, activeName, width) => {
    handleActive(elmName, activeName);
    if (handleSet) {
      handleSet({
        type: 'width',
        value: width,
      });
    } else {
      onSetWidth(width);
    }
  };

  const showWidths = () => {
    let result = '';

    result = widths.map(width => {
      let active = widthDefault === width.name ? 'active-select' : '';
      return (
        <li
          key={width.id}
          className={`width-${width.id} ${active}`}
          onClick={() =>
            handleActiveWidth(`width-${width.id}`, 'active-select', width.id)
          }
        >
          <span className="size-width">{width.name}</span>
        </li>
      );
    });
    if (isProductPage) {
      result.unshift(
        <li
          id="0"
          key="0"
          className="width-0 active-select"
          onClick={() => handleActiveWidth('width-0', 'active-select', 0)}
        >
          <span className="size-width">ALL</span>
        </li>
      );
    }

    return result;
  };
  return (
    <div className="block-26 mb-4">
      <h4>Width</h4>
      <ul>{showWidths()}</ul>
    </div>
  );
}

export default Width;
