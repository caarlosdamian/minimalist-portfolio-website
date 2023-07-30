import styles from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  label: string;
}
export const Button = ({ variant = 'primary', label, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`${styles.btn} ${
        variant === 'secondary' ? styles.secondary : ''
      }`}
    >
      {variant === 'primary' && (
        <div className={styles.arrow}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
            <g fill="none" fillRule="evenodd" stroke="#5FB4A2">
              <path d="M0 9l8 4 8-4" />
              <path opacity=".5" d="M0 5l8 4 8-4" />
              <path opacity=".25" d="M0 1l8 4 8-4" />
            </g>
          </svg>
        </div>
      )}
      <span className={styles.label}>{label}</span>
    </button>
  );
};
