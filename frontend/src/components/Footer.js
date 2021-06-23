import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer
      id="colorlib-footer"
      role="contentinfo"
      style={{
        backgroundImage: 'url(/images/background-2.jpg)',
        color: 'white',
      }}
    >
      <div className="container">
        <div className="row row-pb-md">
          <div className="col footer-col colorlib-widget">
            <h4 style={{ color: 'white' }}>About Footwear</h4>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life
            </p>
            <span>
              <ul className="colorlib-social-icons">
                <li>
                  <a href="/#">
                    <i className="icon-twitter" style={{ color: 'white' }}></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="icon-facebook" style={{ color: 'white' }}></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="icon-linkedin" style={{ color: 'white' }}></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="icon-dribbble" style={{ color: 'white' }}></i>
                  </a>
                </li>
              </ul>
            </span>
          </div>

          <div className="col footer-col colorlib-widget">
            <h4 style={{ color: 'white' }}>Information</h4>
            <span>
              <ul className="colorlib-footer-links">
                <li>About us</li>
                <li>Support</li>
              </ul>
            </span>
          </div>
          <div className="col footer-col">
            <h4 style={{ color: 'white' }}>Contact Information</h4>
            <ul className="colorlib-footer-links">
              <li>0375612504</li>
              <li>todinhvin12a1@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
