import { Interest, Card } from '../../components';
import { portafolioInfo } from '../../utils';
import styles from './Portafoli.module.scss';

const Portafolio = () => {
  return (
    <div className={styles.container}>
      {portafolioInfo.map((item) => (
        <Card
          mobileImg={item.portafolioImages.mobile}
          desktopImg={item.portafolioImages.desktop}
          tableImg={item.portafolioImages.tablet}
          cardText={item.desc}
          cardTitle={item.title}
          btnLabel="VIEW PROJECT"
          btnPath={`/details/${item.id}`}
          key={item.id}
        />
      ))}
      <div className={styles.interest}>
        <Interest />
      </div>
    </div>
  );
};

export default Portafolio;
