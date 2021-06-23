import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '../actions/Carts';
import BreadCrumb from '../components/BreadCrumb';
import Cart from '../components/Cart';
import ProcessCart from '../components/ProcessCart';
import Header from '../components/Header';
import Footer from '../components/Footer';
function CartPage() {
  const carts = useSelector(state => state.carts);
  const dispatch = useDispatch();

  const onRemoveCartItem = id => dispatch(removeCartItem(id));
  if (carts.length > 0) {
    return (
      <React.Fragment>
        <Header />
        {/* <div className="colorlib-loader"></div> */}
        <div className="container">
          <BreadCrumb title="GIỎ HÀNG" />
          <div className="colorlib-product">
            <div className="container">
              <ProcessCart />
              <Cart carts={carts} onRemoveCartItem={onRemoveCartItem} />
            </div>
          </div>
        </div>
        <div className="gototop js-top">
          <a href="/#" className="js-gotop">
            <i className="ion-ios-arrow-up"></i>
          </a>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Header />
      <div className="colorlib-loader"></div>
      <div className="container">
        <h1>Không có sản phẩm'</h1>
      </div>
      <div className="gototop js-top">
        <a href="/#" className="js-gotop">
          <i className="ion-ios-arrow-up"></i>
        </a>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default CartPage;
