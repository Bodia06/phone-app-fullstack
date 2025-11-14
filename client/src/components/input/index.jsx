import React from 'react';
import { useField } from 'formik';
import styles from './input.module.css';

export default function Input({ label, formik, ...props }) {
  const [field, meta] = useField(props);
  const isRadio = props.type === 'radio';

  return (
    <div className={styles.inputWrapper}>
      {label && !isRadio && (
        <label htmlFor={props.name} className={styles.inputLabel}>
          {label}
        </label>
      )}

      {isRadio ? (
        <label className={styles.radioLabel}>
          <input
            {...field}
            {...props}
            checked={field.value === props.value}
            onChange={() => formik.setFieldValue(props.name, props.value)}
            className={styles.radioInput}
          />
          {label}
        </label>
      ) : (
        <input {...field} {...props} className={styles.textInput} />
      )}

      {meta.touched && meta.error && (
        <div className={styles.inputError}>{meta.error}</div>
      )}
    </div>
  );
}
