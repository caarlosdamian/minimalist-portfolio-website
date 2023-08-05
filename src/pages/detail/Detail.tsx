import styles from './Detail.module.scss';
import { useSlider } from '../../hooks/useSlider';
import { Slider } from '../../components/slider/Slider';
import { Interest } from '../../components/interest/Interest';
import { Button } from '../../components/button/Button';
import { Separator } from '../../components/separator/Separator';

const Detail = () => {
  const { nextItem, previusItem, selectedItem } = useSlider();
  const { title, desc, habilities, languages } = selectedItem;
  return (
    <section className={styles.container}>
      <section className={styles.hero}>
        <picture>
          <source
            srcSet={selectedItem.detailsImages.hero[0]}
            media="(max-width: 599px)"
          />
          <source
            srcSet={selectedItem.detailsImages.hero[1]}
            media="(max-width: 1199px)"
          />
          <source
            srcSet={selectedItem.detailsImages.hero[2]}
            media="(min-width: 1200px)"
          />
          <img
            src={selectedItem.detailsImages.hero[2]}
            alt="hero"
            className={styles.hero__img}
          />
        </picture>
      </section>
      <Separator />
      <section className={styles.details}>
        <section className={styles.main__details}>
          <h1 className={styles['main__details--title']}>{title}</h1>
          <p className={styles['main__details--desc']}>{desc}</p>
          <div className={styles['main__details--tools']}>
            <h2 className={styles.tools__title}>{habilities}</h2>
            <div className={styles.habilities}>
              {languages.map((item) => (
                <p key={item} className={styles.tools__item}>
                  &nbsp;{item}&nbsp;
                </p>
              ))}
            </div>
          </div>
          <Button label="VISIT WEBSITE" variant="secondary" />
        </section>
        <section className={styles.secondary__details}></section>
      </section>
      <Slider nextItem={nextItem} previusItem={previusItem} />
      <Interest removeSeparator={true} />
    </section>
  );
};

export default Detail;
