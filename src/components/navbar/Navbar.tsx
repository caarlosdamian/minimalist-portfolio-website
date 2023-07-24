import { hambuerger, logo } from '../../assets';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.left}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.right}>
        <img src={hambuerger} alt="hambuerger" />
      </div>
    </nav>
  );
};
