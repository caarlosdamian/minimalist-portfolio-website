import { useEffect } from 'react';
import { useSlider } from '../../hooks/useSlider';
import { Picture, Separator, Slider, Interest, Button } from '../../components';
import styles from './Details.module.scss';

const Details = () => {
  const { nextItem, previusItem, selectedItem } = useSlider();
  const { title, desc, habilities, languages, background } = selectedItem;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedItem]);

  return (
    <section className={styles.container}>
      <section className={styles.hero}>
        <Picture
          mobile={selectedItem.detailsImages.hero[0]}
          tablet={selectedItem.detailsImages.hero[1]}
          desktop={selectedItem.detailsImages.hero[2]}
          className={styles.hero__img}
        />
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
        <section className={styles.secondary__details}>
          <div className={styles.background}>
            <h3 className={styles.title}>Project Background</h3>
            <p className={styles.desc}>{background}</p>
          </div>
          <div className={styles.previews}>
            <h3 className={styles.title}>Static Previews</h3>
            <div className={styles.previews__imgs}>
              <Picture
                mobile={selectedItem.detailsImages.preview[0]}
                tablet={selectedItem.detailsImages.preview[1]}
                desktop={selectedItem.detailsImages.preview[2]}
                className={styles.hero__img}
              />
              <Picture
                mobile={selectedItem.detailsImages.previewTwo[0]}
                tablet={selectedItem.detailsImages.previewTwo[1]}
                desktop={selectedItem.detailsImages.previewTwo[2]}
                className={styles.hero__img}
              />
            </div>
          </div>
        </section>
      </section>
      <Slider nextItem={nextItem} previusItem={previusItem} />
      <Interest removeSeparator={true} />
    </section>
  );
};

export default Details;
