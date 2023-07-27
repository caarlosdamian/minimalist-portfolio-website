import { NavLink } from 'react-router-dom';
import { hambuerger, logo, close } from '../../assets';
import { navItems } from '../../utils';
import { Menu } from '../menu/Menu';
import { useState } from 'react';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  const [show, setShow] = useState(false);

  const iconStyle = {
    transform: show ? 'rotate(90deg)' : 'rotate(0)',
    transition: 'transform 0.3s ease',
  };

  return (
    <nav className={styles.container}>
      {show && <Menu />}
      <div className={styles.left}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.right}>
        <img
          src={show ? close : hambuerger}
          alt="hambuerger"
          className={styles.right__img}
          style={iconStyle}
          onClick={() => setShow(!show)}
        />
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
