import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';

export const App = () => {
  return (
    <main>
      <Navbar />
      <section className="content">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};
