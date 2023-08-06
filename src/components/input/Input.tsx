/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';
import { UseFormRegister } from 'react-hook-form';
import { Inputs } from '../../pages/contact/Contact';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errors?: any;
  label: string;
  isTextArea?: boolean;
  register: UseFormRegister<Inputs>;
  name: 'name' | 'message' | 'email';
}
export const Input = ({
  errors,
  name,
  placeholder,
  label,
  isTextArea = false,
  register,
}: Props) => {
  return (
    <label htmlFor={name} className={styles.container}>
      {label}
      <input
        placeholder={placeholder}
        className={`${styles.input} ${isTextArea ? styles.textArea : ''} ${
          errors[name] ? styles.error : ''
        }`}
        {...register(name)}
        name={name}
      />
      {errors[name] && (
        <span className={styles.error}>{errors[name]?.message}</span>
      )}
    </label>
  );
};
