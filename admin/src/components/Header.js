import React from 'react';
import { useHistory } from 'react-router-dom';
import auth from '../auth';

function Header(props) {
  const user = JSON.parse(localStorage.getItem('admin'));
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem('admin');
    auth.logout(() => {
      history.push('');
    });
  };
  return (
    <div className="header">
      <div className="header-left">
        <div className="menu-icon dw dw-menu"></div>
        <div
          className="search-toggle-icon dw dw-search2"
          data-toggle="header_search"
        ></div>
        <div className="header-search">
          <form>
            <div className="form-group mb-0">
              <i className="dw dw-search2 search-icon"></i>
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search Here"
              />
              <div className="dropdown">
                <a
                  className="dropdown-toggle no-arrow"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                >
                  <i className="ion-arrow-down-c"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="form-group row">
                    <label className="col-sm-12 col-md-2 col-form-label">
                      From
                    </label>
                    <div className="col-sm-12 col-md-10">
                      <input
                        className="form-control form-control-sm form-control-line"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-12 col-md-2 col-form-label">
                      To
                    </label>
                    <div className="col-sm-12 col-md-10">
                      <input
                        className="form-control form-control-sm form-control-line"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-12 col-md-2 col-form-label">
                      Subject
                    </label>
                    <div className="col-sm-12 col-md-10">
                      <input
                        className="form-control form-control-sm form-control-line"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <button className="btn btn-primary">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="header-right">
        <div className="user-info-dropdown">
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
            >
              <span className="user-icon">
                <img src="vendors/images/photo1.jpg" alt="" />
              </span>
              <span className="user-name">
                Hello {user ? user.username : ''}
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
              <button
                type="button"
                className="dropdown-item"
                onClick={handleLogout}
              >
                <i className="dw dw-logout"></i> Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
