import styles from './Separator.module.scss';

export const Separator = ({
  removeSeparator,
}: {
  removeSeparator?: boolean;
}) => {
  return (
    <div
      className={`${styles.separator} ${
        removeSeparator ? styles.no__separator : ''
      }`}
      id="separator"
    ></div>
  );
};
