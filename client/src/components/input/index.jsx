import React from 'react';
import { useField } from 'formik';

export default function Input({ label, formik, ...props }) {
  const [field, meta] = useField(props);

  const isRadio = props.type === 'radio';

  return (
    <div>
      {label && !isRadio && <label htmlFor={props.name}>{label}</label>}
      {isRadio ? (
        <label>
          <input
            {...field}
            {...props}
            checked={field.value === props.value}
            onChange={() => formik.setFieldValue(props.name, props.value)}
          />
          {label}
        </label>
      ) : (
        <input {...field} {...props} />
      )}
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </div>
  );
}
