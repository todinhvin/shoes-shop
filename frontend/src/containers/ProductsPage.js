import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import ProductIntroduce from '../components/ProductIntroduce';
import Products from '../components/Products';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
function ProductsPage() {
  const [isLoadingSuccess, setIsLoadingSuccess] = useState(false);
  const handleLoading = data => {
    setIsLoadingSuccess(data);
  };
  return (
    <React.Fragment>
      <Header />
      <div id="page">
        <BreadCrumb title="SẢN PHẨM" />
        <ProductIntroduce />
        <Products handleLoading={handleLoading} />
      </div>
      <div className="gototop js-top">
        <a href="/#" className="js-gotop">
          <i className="ion-ios-arrow-up"></i>
        </a>
      </div>
      <Footer />
      {!isLoadingSuccess ? <Loading /> : ''}
    </React.Fragment>
  );
}

export default ProductsPage;
