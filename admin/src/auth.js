class Auth {
  constructor() {
    this.authenticated = localStorage.getItem('admin') ? true : false;
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }
  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    const date = new Date();
    if (localStorage.getItem('admin')) {
      const user = JSON.parse(localStorage.getItem('admin'));
      if (user.expiryTime < date.getTime()) {
        this.authenticated = false;
        localStorage.removeItem('admin');
      }
    }
    return this.authenticated;
  }
}

function check() {}

export default new Auth();
