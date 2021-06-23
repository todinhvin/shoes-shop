import React from 'react';

function Register(props) {
  return (
    <div className="row login-body">
      <div className="col-md-6 mx-auto p-0">
        <div className="card">
          <div className="login-box">
            <div className="login-snip">
              {' '}
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                checked
              />
              <label className="tab">Login</label>{' '}
              <input id="tab-2" type="radio" name="tab" className="sign-up" />
              <label className="tab">Sign Up</label>
              <div className="login-space">
                <div className="login">
                  <div className="group">
                    {' '}
                    <label className="label">Username</label>{' '}
                    <input
                      id="user"
                      type="text"
                      className="input"
                      placeholder="Enter your username"
                    />{' '}
                  </div>
                  <div className="group">
                    {' '}
                    <label className="label">Password</label>{' '}
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                      placeholder="Enter your password"
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
                    {' '}
                    <input
                      type="submit"
                      className="button"
                      value="Sign In"
                    />{' '}
                  </div>
                  <div className="hr"></div>
                  <div className="foot">
                    {' '}
                    <a href="#">Forgot Password?</a>{' '}
                  </div>
                </div>
                <div className="sign-up-form">
                  <div className="group">
                    {' '}
                    <label className="label">Username</label>{' '}
                    <input
                      id="user"
                      type="text"
                      className="input"
                      placeholder="Create your Username"
                    />{' '}
                  </div>
                  <div className="group">
                    {' '}
                    <label className="label">Password</label>{' '}
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                      placeholder="Create your password"
                    />{' '}
                  </div>
                  <div className="group">
                    {' '}
                    <label className="label">Repeat Password</label>{' '}
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                      placeholder="Repeat your password"
                    />{' '}
                  </div>
                  <div className="group">
                    {' '}
                    <label className="label">Email Address</label>{' '}
                    <input
                      id="pass"
                      type="text"
                      className="input"
                      placeholder="Enter your email address"
                    />{' '}
                  </div>
                  <div className="group">
                    {' '}
                    <input
                      type="submit"
                      className="button"
                      value="Sign Up"
                    />{' '}
                  </div>
                  <div className="hr"></div>
                  <div className="foot">
                    {' '}
                    <label>Already Member?</label>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
