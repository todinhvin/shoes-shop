import { combineReducers } from 'redux';
import cartReducer from './carts';
import productsReducer from './products';
import userReducer from './user';

const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartReducer,
  user: userReducer,
});

export default rootReducer;
