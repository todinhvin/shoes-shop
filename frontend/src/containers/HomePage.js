import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import TrustedPartners from './../components/TrustedPartners';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Introduce from './../components/Introduce';
function HomePage() {
  const history = useHistory();
  const handleClick = e => {
    e.preventDefault();
    history.push(e.target.name);
    window.scrollTo(0, 100);
  };
  return (
    <React.Fragment>
      <Header />
      <div id="page">
        <Introduce />

        <div className="row">
          <div className="container">
            <ul className="panel-image panel">
              <li className="panel-image-item-1 col-xs-4">
                <img
                  src="/images/img1.jpg"
                  className="item-img "
                  title=""
                  alt=""
                  width="386"
                  height="394"
                />
              </li>
              <li className="panel-image-item-2 col-xs-4">
                <img
                  src="images/img2.jpg"
                  className="item-img "
                  title=""
                  alt=""
                  width="784"
                  height="394"
                />
                <div className="item-html ">
                  <h3>ABOUT</h3>
                  <a
                    href="/#"
                    className="btn btn-primary"
                    onClick={handleClick}
                    name="/about"
                  >
                    VIEW ALL
                  </a>
                </div>
              </li>
              <li className="panel-image-item-3 col-xs-4">
                <img
                  src="images/img3.jpg"
                  className="item-img "
                  title=""
                  alt=""
                  width="784"
                  height="394"
                />
                <div className="item-html">
                  <h3>All Shoes</h3>
                  <a
                    href="/#"
                    className="btn btn-primary"
                    value="products"
                    onClick={handleClick}
                    name="/products"
                  >
                    VIEW ALL
                  </a>
                </div>
              </li>
              <li className="panel-image-item-4 col-xs-4">
                <img
                  src="/images/img4.jpg"
                  className="item-img "
                  title=""
                  alt=""
                  width="386"
                  height="394"
                />
              </li>
            </ul>
          </div>
        </div>

        <TrustedPartners />
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
export default HomePage;
