import React from 'react';
import About from '../components/About';
import BreadCrumb from '../components/BreadCrumb';
import Header from '../components/Header';
import Footer from '../components/Footer';

function AboutPage() {
  return (
    <React.Fragment>
      <Header />
      <div id="page">
        <BreadCrumb title="GIỚI THIỆU" />
        <About />
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

export default AboutPage;
