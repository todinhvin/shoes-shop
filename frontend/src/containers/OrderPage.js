import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import OrderComplete from '../components/OrderComplete';
import ProcessCart from '../components/ProcessCart';
import Header from '../components/Header';
import Footer from '../components/Footer';
function OrderPage() {
  return (
    <React.Fragment>
      <Header />
      <div id="page">
        <BreadCrumb title="ĐẶT HÀNG" />
        <div className="colorlib-product">
          <div className="container">
            <ProcessCart />
            <OrderComplete />
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

export default OrderPage;
