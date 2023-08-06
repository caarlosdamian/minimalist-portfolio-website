import { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  label: string;
  isTextArea?: boolean;
}
export const Input = ({
  error = false,
  name,
  placeholder,
  label,
  isTextArea = false,
}: Props) => {
  console.log('===isTextArea=', isTextArea);
  return (
    <label htmlFor={name} className={styles.container}>
      {label}
      <input
        placeholder={placeholder}
        name={name}
        className={`${styles.input} ${isTextArea ? styles.textArea : ''} ${
          error ? styles.error : ''
        }`}
      />
      {false && <span className={styles.error}>This is Error</span>}
    </label>
  );
};
