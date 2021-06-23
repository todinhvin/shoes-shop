import React from 'react';
import BrandFilter from './BrandFilter';
import Color from './Color';
import Size from './Size';
import Width from './Width';
function Selector(props) {
  const { handleSet, isProductPage } = props;
  return (
    <div className="col-lg-3 col-xl-3">
      <div className="row">
        <BrandFilter
          handleSet={handleSet}
          brandDefault="ALL"
          isProductPage={isProductPage}
        />
        <div className="col-sm-12">
          <div className="side border mb-1">
            <Width
              handleSet={handleSet}
              widthDefault="ALL"
              setItem={false}
              isProductPage={isProductPage}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <Color
            handleSet={handleSet}
            colorDefault="ALL"
            isProductPage={isProductPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Selector;
