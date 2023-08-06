import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import { navItems } from '../../utils';
import { logoLight } from '../../assets';
import { Socials } from '../socials/Socials';

export const Footer = () => {
  
  const links = navItems.map(({ id, label, path }) => (
    <NavLink to={path} key={id}>
      {label}
    </NavLink>
  ));

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <img src={logoLight} alt="logoLight" />
        <div className={styles.navLinks}>{links}</div>
        <Socials/>
      </div>
    </footer>
  );
};
