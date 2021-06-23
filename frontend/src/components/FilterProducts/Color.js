import React, { useEffect, useState } from 'react';
import instance from '../../axiosService';
import { handleActive } from './HandleActive';

function Color(props) {
  const { handleSet, colorDefault, isProductPage } = props;
  let [colors, setColors] = useState([]);
  useEffect(() => {
    instance
      .get('/colors')
      .then(resp => {
        setColors(resp.data);
      })
      .catch(error => console.log(error));
  }, []);
  const renderColors = () => {
    let result;
    result = colors.map(color => {
      let active = colorDefault === color.name ? 'active-width-color' : '';
      return (
        <li
          key={color.id}
          className={`color-${color.id} ${active}`}
          onClick={() =>
            handleActiveColor(
              `color-${color.id}`,
              'active-width-color',
              color.id
            )
          }
          style={{ cursor: 'pointer' }}
        >
          {color.name}
        </li>
      );
    });
    if (isProductPage) {
      result.unshift(
        <li
          key="0"
          className="color-0 active-width-color"
          onClick={() => handleActiveColor('color-0', 'active-width-color', 0)}
          style={{ cursor: 'pointer' }}
        >
          ALL
        </li>
      );
    }

    return result;
  };
  const handleActiveColor = (elmName, activeName, color) => {
    handleActive(elmName, activeName);
    handleSet({
      type: 'color',
      value: color,
    });
  };
  return (
    <div className="side border mb-1">
      <h3>Colors</h3>
      <ul>{renderColors()}</ul>
    </div>
  );
}

export default Color;
