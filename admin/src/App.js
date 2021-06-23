import Header from './components/Header';
import Loading from './components/Loading';
import Menu from './components/Menu';
import HomePage from './containers/HomePage';
import ProductPage from './containers/ProductPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import Login from './components/Login';
import { ProtectedRoute } from './protected-router';
function App() {
  const showMenu = () => {
    let result = [];
    result = routes.map((route, index) => {
      return (
        <ProtectedRoute
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    });
    return result;
  };
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <div className="main-container">
            <div className="pd-ltr-20">
              <Header />
              <Menu />
              {showMenu()}
            </div>
          </div>
        </Route>
        <Route path="" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
