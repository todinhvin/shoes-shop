import React from 'react';
import Selector from './components/Selector';
import HomePage from './containers/HomePage';
import OrderPage from './containers/OrderPage';
import ProductPage from './containers/ProductPage';

const routes = [
  {
    path: '/admin',
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: '/admin/products',
    exact: true,
    main: () => <ProductPage />,
  },
  {
    path: '/admin/order-table',
    exact: false,
    main: () => <OrderPage />,
  },
  {
    path: '/admin/selector',
    exact: false,
    main: () => <Selector />,
  },
];

export default routes;
