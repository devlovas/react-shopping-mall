import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom'

const HomeTpl = lazy(() => import('@/pages/Home'));
const CartTpl = lazy(() => import('@/pages/Cart'));
const CategoryTpl = lazy(() => import('@/pages/Category'));
const MeTpl = lazy(() => import('@/pages/Me'));

const routes = [
  {
    path: '/home',
    component: HomeTpl
  },
  {
    path: '/cart',
    component: CartTpl
  },
  {
    path: '/category',
    component: CategoryTpl
  },
  {
    path: '/me',
    component: MeTpl
  },
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to='/home' />
    }
  }
];

export default routes;
