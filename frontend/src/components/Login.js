import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import instance from '../axiosService';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/User';

function Login(props) {
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  });
  const [registerInfo, setRegisterInfo] = useState({
    usernameRegister: '',
    passwordRegister: '',
    emailRegister: '',
  });
  const [loginForm, setLoginForm] = useState(true);
  const [alter, setAlter] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  let history = useHistory();
  const handleChange = e => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = () => {
    instance
      .post('/auth/signin', {
        username: loginInfo.username,
        password: loginInfo.password,
      })
      .then(resp => {
        dispatch(loginUser(resp.data));
        history.goBack();
      })
      .catch(err => {
        setAlter('danger');
        setMessage('Check username or password');
      });
  };
  const handleRegister = () => {
    instance
      .post('/auth/signup', {
        username: registerInfo.usernameRegister,
        password: registerInfo.passwordRegister,
        email: registerInfo.emailRegister,
      })
      .then(resp => {
        setAlter('success');
        setMessage(resp.data.message);
        setLoginForm(true);
      })
      .catch(err => {
        setError('Register not success');
      });
  };
  const formLoginAppear = () => {
    setLoginForm(true);
  };
  const formSignUpAppear = () => {
    setLoginForm(false);
  };
  const handleRegisterChange = e => {
    setRegisterInfo({
      ...registerInfo,
      [e.target.name]: e.target.value,
    });
  };
  const checkLogin = localStorage.getItem('user') ? true : false;
  if (checkLogin) {
    history.goBack();
  }
  return (
    <div
      className="row login-body"
      style={{
        backgroundImage: 'url(/images/login-background.jpg)',
        backgroundSize: '100%',
      }}
    >
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"></div>

      <div className="col-md-6 mx-auto p-0">
        <div className="card">
          <div className="login-box">
            <div className="login-snip">
              {' '}
              <input
                id="tab-1"
                type="radio"
                name="tab"
                value=""
                className="sign-in"
                checked={loginForm}
                onChange={12}
              />
              <label className="tab" onClick={formLoginAppear}>
                Login
              </label>{' '}
              <input
                id="tab-2"
                type="radio"
                name="tab"
                className="sign-up"
                value=""
                checked={!loginForm}
              />
              <label className="tab" onClick={formSignUpAppear}>
                Sign Up
              </label>
              <div className="login-space">
                <div className="login">
                  {alter !== '' && message !== '' ? (
                    <div className={`alert alert-${alter}`} role="alert">
                      {message}
                    </div>
                  ) : (
                    ''
                  )}

                  <div className="group">
                    {' '}
                    <label className="label">Username</label>{' '}
                    <input
                      id="user1"
                      type="text"
                      className="input"
                      placeholder="Enter your username"
                      value={loginInfo.username}
                      name="username"
                      onChange={handleChange}
                    />{' '}
                  </div>
                  <div className="group">
                    {' '}
                    <label className="label">Password</label>{' '}
                    <input
                      id="pass1"
                      type="password"
                      className="input"
                      data-type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={loginInfo.password}
                      onChange={handleChange}
                    />{' '}
                  </div>
                  <div className="group">
                    {' '}
                    <input
                      id="check"
                      type="checkbox"
                      className="check"
                      checked
                    />{' '}
                    <label>
                      <span className="icon"></span> Keep me Signed in
                    </label>{' '}
                  </div>
                  <div className="group">
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{
                        width: '150px',
                        height: '45px',
                        background: '#1161ee',
                      }}
                      onClick={handleLogin}
                    >
                      Sign In
                    </button>
                  </div>

                  <div className="hr"></div>
                  <div className="foot">
                    {' '}
                    <a href="#">Forgot Password?</a>{' '}
                  </div>
                </div>

                <div className="sign-up-form">
                  {error !== '' ? (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  ) : (
                    ''
                  )}
                  <div className="group">
                    {' '}
                    <label className="label">Username</label>{' '}
                    <input
                      id="user"
                      type="text"
                      className="input"
                      placeholder="Create your Username"
                      value={registerInfo.usernameRegister}
                      onChange={handleRegisterChange}
                      name="usernameRegister"
                    />{' '}
                  </div>
                  <div className="group">
                    {' '}
                    <label className="label">Password</label>{' '}
                    <input
                      id="pass2"
                      type="password"
                      className="input"
                      data-type="password"
                      placeholder="Create your password"
                      value={registerInfo.passwordRegister}
                      onChange={handleRegisterChange}
                      name="passwordRegister"
                    />{' '}
                  </div>
                  {/* <div className="group">
                    {' '}
                    <label className="label">Repeat Password</label>{' '}
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                      placeholder="Repeat your password"
                    />{' '}
                  </div> */}
                  <div className="group">
                    {' '}
                    <label className="label">Email Address</label>{' '}
                    <input
                      id="pass"
                      type="text"
                      className="input"
                      placeholder="Enter your email address"
                      value={registerInfo.emailRegister}
                      onChange={handleRegisterChange}
                      name="emailRegister"
                    />{' '}
                  </div>
                  <div className="group">
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{
                        width: '150px',
                        height: '45px',
                        background: '#1161ee',
                      }}
                      onClick={handleRegister}
                    >
                      Sign up
                    </button>
                  </div>
                  <div className="hr"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
