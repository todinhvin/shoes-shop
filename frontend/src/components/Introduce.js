import React from 'react';
import { Link } from 'react-router-dom';
function Introduce() {
  return (
    <aside id="colorlib-hero" style={{ marginBottom: '40px' }}>
      <div className="flexslider">
        <ul className="slides">
          <li style={{ backgroundImage: 'url(images/background-1.jpg)' }}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6 offset-sm-3 text-center slider-text">
                  <div className="slider-text-inner">
                    <div className="desc">
                      <h1 className="head-1">WELCOME TO</h1>
                      <h2 className="head-2">Shoes SHOP</h2>
                      <p style={{ marginTop: '20px' }}>
                        <Link
                          to='products?pagination="pageNumber :1","pageSize":12'
                          className="btn btn-primary"
                        >
                          Buy shoes
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li style={{ backgroundImage: 'url(images/background.jpg)' }}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6 offset-sm-3 text-center slider-text">
                  <div className="slider-text-inner">
                    <div className="desc">
                      <h1 className="head-1">WELCOME TO</h1>
                      <h2 className="head-2">Shoes SHOP</h2>

                      <p style={{ marginTop: '20px' }}>
                        <Link to="/products" className="btn btn-primary">
                          Buy shoes
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}
export default Introduce;
