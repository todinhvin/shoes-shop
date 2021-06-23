import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './redux/configureStore';
const store = configureStore();
const showMenu = () => {
  let result = [];
  result = routes.map((route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
    );
  });
  return result;
};
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>{showMenu(routes)}</Switch>
      </Router>
    </Provider>
  );
}

export default App;
