import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeCart } from '../actions/Carts';
import instance from './../axiosService';
function Checkout(props) {
  const { carts } = props;
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const history = useHistory();
  const handleOrderSuccess = () => dispatch(removeCart());
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    phone: '',
    address: '',
    note: '',
    user_id: user ? user.id : null,
  });
  const handleChange = e => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleOrder = () => {
    carts.forEach(cart => {
      const order = {
        id: '',
        productDTO: cart.product,
        user_id: customerInfo.user_id,
        quantity: cart.quantity,
        fullName: customerInfo.fullName,
        phone: customerInfo.phone,
        note: customerInfo.note,
        address: customerInfo.address,
        size: cart.size.name,
      };
      instance({
        method: 'post',
        url: '/orders',
        data: order,
        headers: { Authorization: 'Bearer ' + user.accessToken },
      })
        .then(resp => {
          handleOrderSuccess();
          history.push('/order-complete');
          window.scrollTo(0, 0);
        })
        .catch(err => {
          console.log(err);
        });
    });
  };
  let total = 0;
  carts.forEach(cart => {
    total += cart.quantity * cart.product.price;
  });
  const showOrder = () => {
    let result;
    result = carts.map(cart => {
      return (
        <li
          style={{ display: 'flex' }}
          key={`${cart.product.id}-${cart.product.width}-${cart.size.name}`}
        >
          <span>
            {cart.quantity.format()} x {cart.product.name} <br /> Size{' '}
            {cart.size.name}
          </span>{' '}
          <span>{(cart.quantity * cart.product.price).format()} ??</span>
        </li>
      );
    });
    return result;
  };
  return (
    <div className="colorlib-product">
      <div className="container">
        <div className="row row-pb-lg">
          <div className="col-sm-10 offset-md-1">
            <div className="process-wrap">
              <div className="process text-center active">
                <p>
                  <span>01</span>
                </p>
                <h3>Shopping Cart</h3>
              </div>
              <div className="process text-center active">
                <p>
                  <span>02</span>
                </p>
                <h3>Checkout</h3>
              </div>
              <div className="process text-center">
                <p>
                  <span>03</span>
                </p>
                <h3>Order Complete</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <form method="post" className="colorlib-form">
              <h2>Th??ng tin chi ti???t</h2>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="fname">H??? t??n</label>
                    <input
                      type="text"
                      id="fname"
                      placeholder="Nh???p h??? t??n"
                      className="form-control"
                      value={customerInfo.fullName}
                      onChange={handleChange}
                      name="fullName"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="lphone">S??? ??i???n tho???i</label>
                    <input
                      type="text"
                      id="lphone"
                      className="form-control"
                      placeholder="Nh???p s??? ??i???n tho???i"
                      value={customerInfo.phone}
                      onChange={handleChange}
                      name="phone"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="faddress">?????a ch???</label>
                    <input
                      type="text"
                      id="address"
                      className="form-control"
                      placeholder="Nh???p ?????a ch???"
                      value={customerInfo.address}
                      onChange={handleChange}
                      name="address"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="fnote"> Ghi ch??</label>
                    <textarea
                      id="fnote textarea-custom"
                      className=" form-control "
                      rows="3"
                      placeholder="Ghi ch??  (N???u c???n)"
                      value={customerInfo.note}
                      onChange={handleChange}
                      name="note"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-4">
            <div className="row">
              <div className="col-md-12">
                <div className="cart-detail">
                  <h2>H??a ????n</h2>
                  <ul>
                    <li>
                      <ul>{showOrder()}</ul>
                    </li>
                    <li>
                      <span>T???ng c???ng</span> <span>{total.format()} ??</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-100"></div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleOrder}
                  >
                    Thanh to??n
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Number.prototype.format = function (n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};
export default Checkout;
