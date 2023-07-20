import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="contact">Contact</Link>
    </div>
  );
};

export default Home;
