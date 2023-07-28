import styles from './Menu.module.scss';

export const Menu = ({ links }: { links: React.ReactNode }) => {
  return <div className={styles.container}>{links}</div>;
};
