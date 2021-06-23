import React, { useEffect, useState } from 'react';
import instance from '../../axiosService';
import { handleActive } from './HandleActive';

function BrandFilter(props) {
  const { handleSet, brandDefault, isProductPage } = props;
  let [brands, setBrands] = useState([]);
  useEffect(() => {
    instance
      .get('/brands')
      .then(resp => {
        setBrands(resp.data);
      })
      .catch(error => console.log(error));
  }, []);
  const renderBrands = () => {
    let result;
    result = brands.map(brand => {
      let active = brandDefault === brand.name ? 'active-width-color' : '';
      return (
        <li
          key={brand.id}
          className={`brand-${brand.id} ${active}`}
          onClick={() =>
            handleActiveBrand(
              `brand-${brand.id}`,
              'active-width-color',
              brand.id
            )
          }
          style={{ cursor: 'pointer' }}
        >
          {brand.name}
        </li>
      );
    });
    if (isProductPage) {
      result.unshift(
        <li
          key="0"
          className="brand-0 active-width-color"
          onClick={() => handleActiveBrand('brand-0', 'active-width-color', 0)}
          style={{ cursor: 'pointer' }}
        >
          ALL
        </li>
      );
    }
    return result;
  };
  const handleActiveBrand = (elmName, activeName, brand) => {
    handleActive(elmName, activeName);
    handleSet({
      type: 'brand',
      value: brand,
    });
  };
  return (
    <div className="col-sm-12">
      <div className="side border mb-1">
        <h3>Brand</h3>
        <ul>{renderBrands()}</ul>
      </div>
    </div>
  );
}

export default BrandFilter;
