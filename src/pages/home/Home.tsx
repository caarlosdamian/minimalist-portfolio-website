import { heroDesktop, heroMobile, heroTablet } from '../../assets';
import { Button } from '../../components/button/Button';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <section className={styles.container}>
      <section className={styles.hero}>
        <picture>
          <source srcSet={heroMobile} media="(max-width: 599px)" />
          <source
            srcSet={heroTablet}
            media="(min-width: 600px)"
          />
          <source srcSet={heroDesktop} media="(min-width: 1200px)" />

          <img src={heroMobile} alt="hero" className={styles.hero__img} />
        </picture>
        <section className={styles.hero__info}>
          <h1 className={styles.hero__title}>
            Hey, I’m Alex Spencer and I love building beautiful websites
          </h1>
          <Button label='About me' />
        </section>
      </section>
    </section>
  );
};

export default Home;
