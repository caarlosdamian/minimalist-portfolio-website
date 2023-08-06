import { socialIcons, socialIconsBlack } from '../../utils/info';
import styles from './Socials.module.scss';

export const Socials = ({ isDark }: { isDark?: boolean }) => {
  const iconArray = isDark ? socialIconsBlack : socialIcons;
  const socials = iconArray.map(({ id, icon }) => (
    <img src={icon} alt={id} key={id} />
  ));

  return <div className={styles.socials}>{socials}</div>;
};
