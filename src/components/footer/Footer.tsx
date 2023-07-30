import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import { navItems } from '../../utils';
import { logoLight } from '../../assets';
import { socialIcons } from '../../utils/info';

export const Footer = () => {
  
  const links = navItems.map(({ id, label, path }) => (
    <NavLink to={path} key={id}>
      {label}
    </NavLink>
  ));

  const socials = socialIcons.map(({ id, icon }) => (
    <img src={icon} alt={id} key={id} />
  ));

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <img src={logoLight} alt="logoLight" />
        <div className={styles.navLinks}>{links}</div>
        <div className={styles.socials}>{socials}</div>
      </div>
    </footer>
  );
};
