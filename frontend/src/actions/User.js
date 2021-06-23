import { LOGIN, LOGOUT } from '../constants/User';

export const loginUser = data => {
  return {
    type: LOGIN,
    payload: {
      user: data,
    },
  };
};

export const logoutUser = data => {
  return {
    type: LOGOUT,
  };
};
