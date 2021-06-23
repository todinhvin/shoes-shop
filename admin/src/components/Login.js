import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import instance from '../axiosService';
import auth from './../auth';
import Loading from './Loading';
function Login(props) {
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  let history = useHistory();
  const handleChange = e => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = () => {
    setIsLoading(true);
    instance
      .post('/auth/signin/admin', {
        username: loginInfo.username,
        password: loginInfo.password,
      })
      .then(resp => {
        setIsLoading(false);
        localStorage.setItem('admin', JSON.stringify(resp.data));
        auth.login(() => {
          history.push('/admin');
        });
      })
      .catch(function (error) {
        setIsLoading(false);
        if (error.response) {
          if (error.response.status === 400) {
            setMessage('Not authorized');
          }
          if (error.response.status === 401) {
            setMessage('Username or password not correct');
          }
        }
      });
  };
  const checkLogin = localStorage.getItem('admin') ? true : false;
  if (checkLogin) {
    history.replace({ pathname: '/admin' });
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-7">
            <img src="vendors/images/login-page-img.png" alt="" />
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="login-box bg-white box-shadow border-radius-10">
              <div className="login-title">
                <h2 className="text-center text-primary">Login</h2>
              </div>
              {message !== null ? (
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              ) : (
                ''
              )}
              <form>
                <div className="input-group custom">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Username"
                    value={loginInfo.username}
                    onChange={handleChange}
                    name="username"
                  />
                  <div className="input-group-append custom">
                    <span className="input-group-text">
                      <i className="icon-copy dw dw-user1"></i>
                    </span>
                  </div>
                </div>
                <div className="input-group custom">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="**********"
                    value={loginInfo.password}
                    onChange={handleChange}
                    name="password"
                  />
                  <div className="input-group-append custom">
                    <span className="input-group-text">
                      <i className="dw dw-padlock1"></i>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="input-group mb-0">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block"
                        onClick={handleLogin}
                      >
                        {' '}
                        Sign In
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
