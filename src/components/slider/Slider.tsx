import { Link } from 'react-router-dom';
import { arrowLeft, arrowRight } from '../../assets';
import { PortafolioItem } from '../../interfaces';
import styles from './Slider.module.scss';

export const Slider = ({
  nextItem,
  previusItem,
}: {
  nextItem: PortafolioItem;
  previusItem: PortafolioItem;
}) => {
  return (
    <div className={styles.container}>
      <Link
        to={`/details/${previusItem?.id}`}
        className={`links ${styles.item__container}`}
      >
        <img src={arrowLeft} alt="arrow" />
        <div className={styles.slider__controls}>
          <p className={styles.item__title}>{previusItem?.title}</p>

          <p className={styles.item__header}>Previous Project</p>
        </div>
      </Link>
      <Link
        to={`/details/${nextItem.id}`}
        className={`links ${styles.item__container}`}
      >
        <img src={arrowRight} alt="arrow" />

        <div className={styles.slider__controls}>
          <p className={styles.item__title}>{nextItem.title}</p>
          <p className={styles.item__header}>Next Project</p>
        </div>
      </Link>
    </div>
  );
};
