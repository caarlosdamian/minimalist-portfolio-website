import {
  heroDesktop,
  heroMobile,
  heroTablet,
  profileDesktop,
  profileMobile,
  profileTablet,
} from '../../assets';
import { Button } from '../../components/button/Button';
import { Card } from '../../components/card/Card';
import { Separator } from '../../components/separator/Separator';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <section className={styles.container}>
      <section className={styles.hero}>
        <picture>
          <source srcSet={heroMobile} media="(max-width: 599px)" />
          <source srcSet={heroTablet} media="(min-width: 600px)" />
          <source srcSet={heroDesktop} media="(min-width: 1200px)" />

          <img src={heroMobile} alt="hero" className={styles.hero__img} />
        </picture>
        <Separator />
        <section className={styles.hero__info}>
          <h1 className={styles.hero__title}>
            Hey, I’m Alex Spencer and I love building beautiful websites
          </h1>
          <Button label="About me" />
        </section>
      </section>
      <section id="about" className={styles.about}>
        <Card
          cardTitle="About Me"
          desktopImg={profileDesktop}
          mobileImg={profileMobile}
          tableImg={profileTablet}
          btnLabel="GO TO PORTFOLIO"
          btnPath="/portafolio"
          cardText="I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work."
        />
      </section>
    </section>
  );
};

export default Home;
