import * as cartTypes from './../constants/Cart';

var data = localStorage.getItem('carts');
var initialState = data ? JSON.parse(data) : [];
const findIndex = (carts, cartItem) => {
  let index = -1;
  carts.forEach((cart, i) => {
    if (
      cart.product.id === cartItem.product.id &&
      cart.size.id === cartItem.size.id
    ) {
      index = i;
      return;
    }
  });
  return index;
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      if (action.payload.cartItem.cartPage) {
        let index = findIndex(state, action.payload.cartItem.cartElm);
        if (index !== -1) {
          state[index].quantity = action.payload.cartItem.newQuantity;
        } else {
          state.push(action.payload.data.cartItem.cartElm);
        }
      } else {
        let index1 = findIndex(state, action.payload.cartItem);
        if (index1 !== -1) {
          state[index1].quantity += action.payload.cartItem.quantity;
        } else {
          state.push(action.payload.cartItem);
        }
      }
      localStorage.setItem('carts', JSON.stringify(state));
      return [...state];
    case cartTypes.REMOVE_CART_ITEM:
      let indexRemove = findIndex(state, action.payload.cartItem);
      state.splice(indexRemove, 1);
      localStorage.setItem('carts', JSON.stringify(state));
      return [...state];
    case cartTypes.REMOVE_CART:
      localStorage.removeItem('carts');
      state = [];
      return [...state];
    default:
      return state;
  }
};

export default cartReducer;
