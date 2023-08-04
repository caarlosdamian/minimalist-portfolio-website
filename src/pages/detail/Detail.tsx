import { Link } from 'react-router-dom';
import styles from './Detail.module.scss';
import { useSlider } from '../../hooks/useSlider';

const Detail = () => {
  const { nextItem, previusItem, selectedItem } = useSlider();
  return (
    <div>
      {/* {JSON.stringify(selectedItem)}
      <Link to={`/details/${previusItem.id}`}>{previusItem.title}</Link>
      <Link to={`/details/${nextItem.id}`}>{nextItem.title}</Link> */}
    </div>
  );
};

export default Detail;
