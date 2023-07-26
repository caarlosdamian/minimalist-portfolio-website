import { NavLink } from 'react-router-dom';
import { hambuerger, logo } from '../../assets';
import { navItems } from '../../utils';
import styles from './Navbar.module.scss';
import { Menu } from '../menu/Menu';

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Menu />
      <div className={styles.left}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.right}>
        <img src={hambuerger} alt="hambuerger" className={styles.right__img} />
        <div className={styles.right__navlinks}>
          {navItems.map(({ id, label, path }) => (
            <NavLink to={path} key={id}>
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
