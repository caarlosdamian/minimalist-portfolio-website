import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import { Separator } from '../separator/Separator';
import styles from './Card.module.scss';

interface Props {
  mobileImg: string;
  desktopImg: string;
  tableImg: string;
  cardText: string;
  cardTitle: string;
  btnLabel: string;
  btnPath: string;
}

export const Card = ({
  mobileImg,
  desktopImg,
  tableImg,
  cardText,
  cardTitle,
  btnLabel,
  btnPath,
}: Props) => {
  return (
    <section className={styles.card}>
      <picture>
        <source srcSet={mobileImg} media="(max-width: 599px)" />
        <source srcSet={tableImg} media="(max-width: 1199px)" />
        <source srcSet={desktopImg} media="(min-width: 1200px)" />
        <img src={desktopImg} alt="hero" className={styles.card__img} />
      </picture>
      <section className={styles.card__info}>
        <Separator />
        <h1 className={styles.card__title}>{cardTitle}</h1>
        <p className={styles.card__desc}> {cardText}</p>
        <Link to={btnPath} className="links">
          <Button label={btnLabel} variant="secondary" />
        </Link>
      </section>
    </section>
  );
};
