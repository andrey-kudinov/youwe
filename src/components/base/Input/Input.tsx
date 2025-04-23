import classNames from 'classnames';
import { ForwardedRef, forwardRef, SyntheticEvent } from 'react';

import styles from '@/components/base/Input/Input.module.scss';

interface IProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  errorMessage?: string;
  onBlur: (e: SyntheticEvent) => void;
  onChange: (e: SyntheticEvent) => void;
  required?: boolean;
  type?: string;
  autocomplete?: string;
}

const Input = (
  { id, name, label, placeholder, errorMessage, onBlur, onChange, type = 'text', autocomplete = 'on' }: IProps,
  ref: ForwardedRef<HTMLInputElement>,
) => (
  <div className={styles.inputWrapper}>
    <label htmlFor={id} className={`label ${styles.label}`}>
      {label}
    </label>
    <input
      id={id}
      className={classNames(
        styles.input,
        {
          [styles.error]: errorMessage?.length,
          // [styles.fill]: input?.length,
          // [styles.transparent]: bg === 'transparent',
        },
        'paragraph2',
      )}
      placeholder={placeholder}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      type={type}
      ref={ref}
      autoComplete={autocomplete}
    />
    {errorMessage && <p className={`${styles['error-message']} caption`}>{errorMessage}</p>}
  </div>
);

export default forwardRef(Input);
