import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Checkout from '../components/Checkout';
import Header from '../components/Header';
import Footer from '../components/Footer';

function CheckoutPage() {
  const history = useHistory();
  const carts = useSelector(state => state.carts);
  const user = useSelector(state => state.user);
  if (user === null) {
    window.scroll(0, 0);
    history.replace('/login');
  }
  return (
    <React.Fragment>
      <Header />
      {/* <div className="colorlib-loader"></div> */}
      <div id="page">
        <BreadCrumb title="THANH TOÁN" />
        <Checkout carts={carts} />
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

export default CheckoutPage;
