import { Separator } from '../separator/Separator';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import styles from './Interest.module.scss';

export const Interest = ({ removeSeparator }: { removeSeparator?: boolean }) => {
  return (
    <section className={`${styles.container} ${removeSeparator ? styles.no__separator : ''}`}>
      <Separator removeSeparator={removeSeparator}/>
      <h2 className={styles.header}>Interested in doing a project together?</h2>
      <Link to="/contact" className="links">
        <Button variant="secondary" label="Contact me" />
      </Link>
    </section>
  );
};
