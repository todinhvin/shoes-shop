import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { logoutUser } from '../actions/User';
var menus = [
  {
    label: 'Trang chủ',
    to: '/',
    exact: true,
  },
  {
    label: 'Sản phẩm',
    to: '/products',
    exact: false,
  },
  {
    label: 'Giới thiệu',
    to: '/about',
    exact: false,
  },
];

function Header(props) {
  const dispatch = useDispatch();
  const logout = () => dispatch(logoutUser());
  const user = useSelector(state => state.user);
  const carts = useSelector(state => state.carts);
  const handleLogOut = e => {
    e.preventDefault();
    logout();
  };
  return (
    <nav className="colorlib-nav" role="navigation">
      <div className="top-menu">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-left menu-1">
              <ul>
                {showMenu(menus)}

                <li className="cart">
                  <Link to="/cart">
                    <i className="icon-shopping-cart"></i> Cart [{carts.length}]
                  </Link>
                </li>
                <li style={{ marginLeft: '500px' }}>
                  {!user ? (
                    <Link to="/login">Login</Link>
                  ) : (
                    <a href="/#" onClick={handleLogOut}>
                      Log out
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sale"></div>
    </nav>
  );
}

const customLink = (label, to, activeOnlyWhenExact, index) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      key={index}
      children={({ match }) => {
        //match : là đối tượng xác định trùng hợp của URL
        var active = match ? 'active' : '';
        return (
          <li className={active}>
            <Link to={to} className="my-link">
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

const showMenu = menus => {
  let result = [];
  result = menus.map((item, index) => {
    return customLink(item.label, item.to, item.exact, index);
  });
  return result;
};

export default Header;
