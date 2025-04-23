import { ForwardedRef, forwardRef, SyntheticEvent } from 'react';

import styles from '@/components/base/Select/Select.module.scss';

interface IProps {
  id: string;
  name: string;
  label: string;
  errorMessage?: string;
  onBlur: (e: SyntheticEvent) => void;
  onChange: (e: SyntheticEvent) => void;
  required?: boolean;
  type?: string;
  autocomplete?: string;
}

// TODO: Make this component reusable by passing in the options as children
const Select = (
  { id, name, label, errorMessage, onBlur, onChange, autocomplete = 'on' }: IProps,
  ref: ForwardedRef<HTMLSelectElement>,
) => (
  <div className={styles.inputWrapper}>
    <label htmlFor={id} className={`label ${styles.label}`}>
      {label}
    </label>
    <select
      id={id}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      ref={ref}
      autoComplete={autocomplete}
      className={styles.select}
    >
      <option disabled value="">
        Interest
      </option>
      <optgroup label="Development">
        <option value="front-end">Front-End Development</option>
        <option value="back-end">Back-End Development</option>
        <option value="ecommerce">eCommerce</option>
      </optgroup>
      <optgroup label="More">
        <option value="mvp">MVP</option>
        <option value="code-quality">Code Quality Audit</option>
        <option value="ux">UX/UI Design</option>
        <option value="careers">Working at Avalon Innovations</option>
        <option value="other">Something else</option>
      </optgroup>
    </select>
    {errorMessage && <p className={`${styles['error-message']} caption`}>{errorMessage}</p>}
  </div>
);

export default forwardRef(Select);
