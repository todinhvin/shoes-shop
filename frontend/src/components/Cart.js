import React from 'react';
import { useDispatch } from 'react-redux';
import { saveCartItem } from '../actions/Carts';
import CartItem from './CartItem';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

function Cart(props) {
  const dispatch = useDispatch();
  const updateCartItem = cartItem => dispatch(saveCartItem(cartItem));
  const { carts, onRemoveCartItem } = props;
  let totalPrices = 0;
  const showItems = () => {
    let result;
    result = carts.map(cart => {
      totalPrices += cart.product.price * cart.quantity;
      return (
        <CartItem
          key={`${cart.product.id}-${cart.size.name}-${cart.product.width}`}
          cartItem={cart}
          onRemoveCartItem={onRemoveCartItem}
          updateQuantity={updateQuantity}
        />
      );
    });
    return result;
  };
  const updateQuantity = data => {
    updateCartItem(data);
  };
  return (
    <React.Fragment>
      <div className="row row-pb-lg">
        <div className="col-md-12">
          <div className="product-name d-flex">
            <div className="one-forth text-left px-4">
              <span>Product Name</span>
            </div>
            <div className="one-eight text-center">
              <span>Size</span>
            </div>
            <div className="one-eight text-center">
              <span>Width</span>
            </div>
            <div className="one-eight text-center">
              <span>Price</span>
            </div>
            <div className="one-eight text-center">
              <span>Quantity</span>
            </div>
            <div className="one-eight text-center">
              <span>Total</span>
            </div>
            <div className="one-eight text-center px-4">
              <span>Remove</span>
            </div>
          </div>
          {showItems()}
        </div>
        {carts.length > 4 ? <Pagination center={true} /> : ''}
      </div>
      <div className="row row-pb-lg">
        <div className="col-md-12">
          <div className="total-wrap">
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <div className="col-sm-4 text-center">
                <div className="total">
                  <div className="grand-total">
                    <p>
                      <span>
                        <strong>Total:</strong>
                      </span>{' '}
                      <span>${totalPrices ? totalPrices.format() : ''} đ</span>
                    </p>
                  </div>
                </div>
              </div>
              .
              <div className="col-sm-4">
                <Link
                  to="/checkout"
                  className="btn btn-success"
                  style={{ width: '100%' }}
                >
                  THANH TOÁN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
Number.prototype.format = function (n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};
export default Cart;
