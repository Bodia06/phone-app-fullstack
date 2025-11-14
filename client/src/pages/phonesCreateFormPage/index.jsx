import React from 'react';
import { Formik, Form } from 'formik';
import PHONES_VALIDATION_SCHEMA from '../../utils/phonesValidationSchems';
import Input from '../../components/Input';

export default function PhonesCreateForm({ createPhone }) {
  const initialValues = {
    model: '',
    brand: '',
    year: '',
    ram: '',
    processor: '',
    screenSize: '',
    hasNfc: '',
    image: null,
  };

  const handleSubmit = (values, formikBag) => {
    const formData = new FormData();
    formData.append('model', values.model);
    formData.append('brand', values.brand);
    formData.append('year', values.year);
    formData.append('ram', Number(values.ram));
    formData.append('processor', values.processor);
    formData.append('screenSize', parseFloat(values.screenSize));
    formData.append('hasNfc', values.hasNfc === 'yes');
    if (values.image) {
      formData.append('image', values.image);
    }

    createPhone(formData);
    formikBag.resetForm();
  };

  return (
    <div>
      <h1>Add new Phone</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // validationSchema={PHONES_VALIDATION_SCHEMA}
      >
        {(formikProps) => (
          <Form>
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

            <div>
              <label>Has NFC</label>
              <Input
                label="Yes"
                name="hasNfc"
                type="radio"
                value="yes"
                formik={formikProps}
              />
              <Input
                label="No"
                name="hasNfc"
                type="radio"
                value="no"
                formik={formikProps}
              />
            </div>

            <label>
              <span>Photo:</span>
              <input
                type="file"
                name="image"
                onChange={(e) => {
                  formikProps.setFieldValue('image', e.target.files[0]);
                }}
              />
            </label>

            <button type="submit">Add Phone</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
