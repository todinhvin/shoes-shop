import React from 'react';
import AboutPage from './containers/AboutPage';
import CartPage from './containers/CartPage';
import CheckoutPage from './containers/CheckoutPage';
import HomePage from './containers/HomePage';
import ProductsPage from './containers/ProductsPage';
import OrderPage from './containers/OrderPage';
import Page404 from './containers/Page404';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
const routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: '/products',
    exact: true,
    main: () => <ProductsPage />,
  },
  {
    path: '/products/:id',
    exact: false,
    main: ({ match }) => <ProductDetails match={match} />,
  },
  {
    path: '/cart',
    exact: false,
    main: () => <CartPage />,
  },
  {
    path: '/checkout',
    exact: false,
    main: () => <CheckoutPage />,
  },
  {
    path: '/order-complete',
    exact: false,
    main: () => <OrderPage />,
  },
  {
    path: '/about',
    exact: false,
    main: () => <AboutPage />,
  },

  {
    path: '/login',
    exact: false,
    main: () => <Login />,
  },
  {
    path: '',
    exact: true,
    main: () => <Page404 />,
  },
];

export default routes;
