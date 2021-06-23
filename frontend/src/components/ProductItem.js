import React from 'react';
import { Link } from 'react-router-dom';
function ProductItem(props) {
  const { product } = props;
  return (
    <div className="col-lg-4 mb-4 text-center">
      <div className="product-entry border">
        <Link to={`/products/${product.id}`} className="prod-img">
          <img
            src={`/images/${product.thumbnail}`}
            className="img-fluid"
            alt="Free html5 bootstrap 4 template"
            style={{ height: '255px' }}
          />
        </Link>
        <div className="desc">
          <h2>
            <a href="/#">{product.name}</a>
          </h2>
          <span className="price">
            {product.price ? product.price.format() : ''} đ{' '}
          </span>
        </div>
      </div>
    </div>
  );
}
Number.prototype.format = function (n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};
export default ProductItem;
