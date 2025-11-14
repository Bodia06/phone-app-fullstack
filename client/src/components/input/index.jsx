import React from 'react';
import { useField } from 'formik';
import styles from './input.module.css';

export default function Input({ label, options, ...props }) {
  const [field, meta, helpers] = useField(props);

  if (props.type === 'select') {
    return (
      <div className={styles.inputWrapper}>
        {label && <label htmlFor={props.name}>{label}</label>}
        <select
          id={props.name}
          value={field.value}
          onChange={(e) => helpers.setValue(e.target.value)}
          onBlur={() => helpers.setTouched(true)}
          className={styles.textInput}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {meta.touched && meta.error && (
          <div className={styles.inputError}>{meta.error}</div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.inputWrapper}>
      {label && <label htmlFor={props.name}>{label}</label>}
      <input {...field} {...props} className={styles.textInput} />
      {meta.touched && meta.error && (
        <div className={styles.inputError}>{meta.error}</div>
      )}
    </div>
  );
}
