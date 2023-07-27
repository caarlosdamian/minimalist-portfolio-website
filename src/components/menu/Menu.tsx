import { NavLink } from 'react-router-dom';
import { navItems } from '../../utils';
import styles from './Menu.module.scss';

export const Menu = () => {
  return (
    <div className={styles.container}>
      {navItems.map((item) => (
        <NavLink to={item.path} key={parseInt(item.id) * Math.random()}>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};
