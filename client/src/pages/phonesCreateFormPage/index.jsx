import React from 'react';
import { Formik, Form } from 'formik';
import PHONES_VALIDATION_SCHEMA from '../../utils/phonesValidationSchems';
import Input from '../../components/input';
import styles from './phonesCreateForm.module.css';

export default function PhonesCreateForm({ createPhone }) {
  const initialValues = {
    model: '',
    brand: '',
    year: '',
    ram: '',
    processor: '',
    screenSize: '',
    hasNfc: 'yes',
    image: '',
  };

  const handleSubmit = (values, formikBag) => {
    const formData = new FormData();
    formData.append('model', values.model);
    formData.append('brand', values.brand);
    formData.append('year', new Date(values.year));
    formData.append('ram', Number(values.ram));
    formData.append('processor', values.processor);
    formData.append('screenSize', parseFloat(values.screenSize));
    formData.append('hasNfc', values.hasNfc === 'yes');
    formData.append('image', values.image);

    createPhone(formData);
    formikBag.resetForm();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add new Phone</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={PHONES_VALIDATION_SCHEMA}
      >
        {(formikProps) => (
          <Form className={styles.form}>
            <Input
              label="Model"
              name="model"
              type="text"
              placeholder="Model phone"
            />

            <Input label="Brand" name="brand" type="text" placeholder="Brand" />

            <Input label="Year" name="year" type="date" />

            <Input label="RAM (GB)" name="ram" type="number" placeholder="4" />

            <Input
              label="Processor"
              name="processor"
              type="text"
              placeholder="Snapdragon..."
            />

            <Input
              label="Screen Size (inch)"
              name="screenSize"
              type="number"
              placeholder="6.1"
            />

            <Input
              label="Has NFC"
              name="hasNfc"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />

            <label className={styles.fileLabel}>
              <span>Photo:</span>
              <input
                type="file"
                name="image"
                className={styles.fileInput}
                onChange={(e) =>
                  formikProps.setFieldValue('image', e.target.files[0])
                }
              />
            </label>

            <button type="submit" className={styles.submitButton}>
              Add Phone
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
