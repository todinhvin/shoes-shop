import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './../reducers';
import thunk from 'redux-thunk';
const composeEnhancers =
  process.env.MODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldReload: false,
      })
    : compose;

const configureStore = () => {
  const middewares = [thunk];
  const enhancers = [applyMiddleware(...middewares)];
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  return store;
};

export default configureStore;
