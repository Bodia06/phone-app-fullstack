import * as yup from 'yup';

const PHONES_VALIDATION_SCHEMA = yup.object().shape({
  model: yup
    .string()
    .matches(
      /^[A-Za-z0-9\- ]+$/,
      'Model can only contain letters, numbers, hyphens, and spaces'
    )
    .min(3, 'Model must be at least 3 characters')
    .max(64, 'Model must be at most 64 characters')
    .required('Model is required'),

  brand: yup
    .string()
    .matches(
      /^[A-Za-z0-9\- ]+$/,
      'Brand can only contain letters, numbers, hyphens, and spaces'
    )
    .min(2, 'Brand must be at least 2 characters')
    .max(64, 'Brand must be at most 64 characters')
    .required('Brand is required'),

  year: yup
    .date()
    .max(new Date(), 'Year cannot be in the future')
    .required('Year is required'),

  ram: yup
    .number()
    .min(1, 'RAM must be at least 1 GB')
    .max(1024, 'RAM cannot exceed 1024 GB')
    .required('RAM is required'),

  processor: yup
    .string()
    .matches(
      /^[A-Za-z0-9\- ]+$/,
      'Processor can only contain letters, numbers, hyphens, and spaces'
    )
    .min(3, 'Processor must be at least 3 characters')
    .max(25, 'Processor must be at most 25 characters')
    .required('Processor is required'),

  screenSize: yup
    .number()
    .min(3.0, 'Screen size must be at least 3 inches')
    .max(10.0, 'Screen size cannot exceed 10 inches')
    .required('Screen size is required'),

  hasNfc: yup
    .boolean()
    .transform(value => value === 'yes')
    .required('Has NFC selection is required'),

  image: yup
    .mixed()
    .test('fileSize', 'File is too large', value => {
      if (!value) return true;
      return value.size <= 5 * 1024 * 1024;
    })
    .test('fileType', 'Unsupported file format', value => {
      if (!value) return true;
      return ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
    }),
});

export default PHONES_VALIDATION_SCHEMA;
