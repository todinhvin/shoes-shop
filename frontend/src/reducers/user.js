import { LOGIN, LOGOUT } from '../constants/User';
const checkUserExist = () => {
  if (localStorage.getItem('user')) {
    const date = new Date();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.expiryTime < date.getTime()) {
      localStorage.removeItem('user');
      return null;
    }
    return user;
  }
  return null;
};
const initialValue = checkUserExist();
const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      state = action.payload.user;
      return state;
    case LOGOUT:
      localStorage.removeItem('user');
      return null;
    default:
      return state;
  }
};

export default userReducer;
