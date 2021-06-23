import * as cartTypes from './../constants/Cart';

export const saveCartItem = cartItem => {
  return {
    type: cartTypes.ADD_TO_CART,
    payload: {
      cartItem,
    },
  };
};

export const removeCartItem = cartItem => {
  return {
    type: cartTypes.REMOVE_CART_ITEM,
    payload: {
      cartItem,
    },
  };
};

export const removeCart = () => {
  return {
    type: cartTypes.REMOVE_CART,
  };
};
