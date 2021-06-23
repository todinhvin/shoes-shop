import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

var menus = [
  {
    label: 'Home',
    to: '/admin',
    exact: true,
  },
  {
    label: 'Products',
    to: '/admin/products',
    exact: false,
  },
  {
    label: 'Order',
    to: '/admin/order-table',
    exact: false,
  },
  {
    label: 'Selector',
    to: '/admin/selector',
    exact: false,
  },
];
const customLink = (label, to, activeOnlyWhenExact, index) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      key={index}
      children={({ match }) => {
        //match : là đối tượng xác định trùng hợp của URL
        var active = match ? 'narbar-acitve' : '';
        return (
          <li className={`dropdown ${active}`}>
            <Link to={to} className="dropdown-toggle">
              <span className="mtext">{label}</span>
            </Link>
          </li>
        );
      }}
    />
  );
};

const showMenu = () => {
  let result = [];
  result = menus.map((item, index) => {
    return customLink(item.label, item.to, item.exact, index);
  });
  return result;
};

function Menu() {
  return (
    <div className="left-side-bar">
      <div className="brand-logo">
        <a href="index.html">
          <img
            src="vendors/images/deskapp-logo.svg"
            alt=""
            className="dark-logo"
          />
          <img
            src="vendors/images/deskapp-logo-white.svg"
            alt=""
            className="light-logo"
          />
        </a>
        <div className="close-sidebar" data-toggle="left-sidebar-close">
          <i className="ion-close-round"></i>
        </div>
      </div>

      <div className="menu-block customscroll">
        <div className="sidebar-menu">
          <ul id="accordion-menu">{showMenu()}</ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
