/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home/Home'));
const Portafolio = lazy(() => import('../pages/portafolio/Portafolio'));
const Detail = lazy(() => import('../pages/details/Details'));
const Contact = lazy(() => import('../pages/contact/Contact'));

export const routes = [
  {
    id: 'home',
    component: <Home />,
    path: '/',
  },
  {
    id: 'portafolio',
    component: <Portafolio />,
    path: '/portafolio',
  },
  {
    id: 'contact',
    component: <Contact />,
    path: '/contact',
  },
  {
    id: 'detail',
    component: <Detail />,
    path: '/details/:id',
  },
];
