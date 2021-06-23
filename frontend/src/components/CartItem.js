import React from 'react';

function CartItem(props) {
  const { onRemoveCartItem, cartItem, updateQuantity } = props;
  const removeCartItem = e => {
    e.preventDefault();
    // let element = document.querySelector(`.product-${product.id}`);
    // console.log();
    // element.parentNode.removeChild(element);
    onRemoveCartItem(cartItem);
  };
  const handleUpdate = e => {
    let quantity = +e.target.value;
    if (quantity >= 1 && quantity <= 10) {
      updateQuantity({
        cartElm: cartItem,
        newQuantity: quantity,
        cartPage: true,
      });
    }
  };

  return (
    <div className="product-cart d-flex">
      <div className="one-forth">
        <div className="product-img">
          <img
            src={`images/${cartItem.product.thumbnail}`}
            style={{ height: '100px', width: '100px' }}
          />
        </div>
        <div className="display-tc">
          <h3>{cartItem.product.name}</h3>
        </div>
      </div>
      <div className="one-eight text-center">
        <div className="display-tc">
          <span className="">{cartItem.size.name}</span>
        </div>
      </div>
      <div className="one-eight text-center">
        <div className="display-tc">
          <span className="">{cartItem.product.widthName}</span>
        </div>
      </div>
      <div className="one-eight text-center">
        <div className="display-tc">
          <span className="price">
            {cartItem.product.price ? cartItem.product.price.format() : ''} đ
          </span>
        </div>
      </div>
      <div className="one-eight text-center">
        <div className="display-tc">
          <input
            type="number"
            id={`${cartItem.product.id}-${cartItem.size.name}-${cartItem.product.width}`}
            name="quantity"
            className="form-control input-number text-center"
            value={+cartItem.quantity}
            min="1"
            max="10"
            onChange={handleUpdate}
          />
        </div>
      </div>
      <div className="one-eight text-center">
        <div className="display-tc">
          <span className="price">
            {(cartItem.product.price * cartItem.quantity).format()} đ
          </span>
        </div>
      </div>
      <div className="one-eight text-center">
        <div className="display-tc">
          <a href="/#" className="closed" onClick={removeCartItem}>
            {' '}
          </a>
        </div>
      </div>
    </div>
  );
}
Number.prototype.format = function (n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};
export default CartItem;
