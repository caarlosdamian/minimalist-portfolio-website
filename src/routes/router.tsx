import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router = () => {
  const Home = lazy(() => import('../pages/home/Home'));
  const Portafolio = lazy(() => import('../pages/portafolio/Portafolio'));
  const Contact = lazy(() => import('../pages/contact/Contact'));
  const Detail = lazy(() => import('../pages/detail/Detail'));

  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/portafolio" Component={Portafolio} />
          <Route path="/contact" Component={Contact} />
          <Route path="/detail" Component={Detail} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
