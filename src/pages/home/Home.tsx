import {
  heroDesktop,
  heroMobile,
  heroTablet,
  profileDesktop,
  profileMobile,
  profileTablet,
} from '../../assets';
import { Interest, Card, Button } from '../../components/';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <section className={styles.container}>
      <section className={styles.hero}>
        <picture>
          <source srcSet={heroMobile} media="(max-width: 599px)" />
          <source srcSet={heroTablet} media="(max-width: 1199px)" />
          <source srcSet={heroDesktop} media="(min-width: 1200px)" />

          <img src={heroMobile} alt="hero" className={styles.hero__img} />
        </picture>
        <section className={styles.hero__info}>
          <h1 className={styles.hero__title}>
            Hey, I’m Alex Spencer and I love building beautiful websites
          </h1>
          <a href="#about" className="links">
            <Button label="About me" />
          </a>
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
      <section className="interest">
        <Interest />
      </section>
    </section>
  );
};

export default Home;
