import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';

export const App = () => {
  return (
    <main>
      <Navbar />
      <section className="body">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};
