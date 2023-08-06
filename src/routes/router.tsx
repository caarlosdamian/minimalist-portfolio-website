import { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { App } from '../common/App';

import {
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { routes } from './routes';
import { Loader } from '../components';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {routes.map((route) => (
        <Route
          index={route.path === '/'}
          path={route.path}
          key={route.id}
          element={<Suspense fallback={<Loader />}>{route.component}</Suspense>}
        />
      ))}
    </Route>
  )
);
