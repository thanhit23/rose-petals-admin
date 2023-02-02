import { defineMessages } from 'react-intl';

export const scope = 'Components.Product.edit';

export default defineMessages({
  label: {
    name: {
      id: `${scope}.label.name`,
      defaultMessage: 'Name',
    },
    price: {
      id: `${scope}.label.price`,
      defaultMessage: 'Price',
    },
    images: {
      id: `${scope}.label.images`,
      defaultMessage: 'Images',
    },
    description: {
      id: `${scope}.label.description`,
      defaultMessage: 'Description',
    },
    brand: {
      id: `${scope}.label.brand`,
      defaultMessage: 'Brand',
    },
    category: {
      id: `${scope}.label.category`,
      defaultMessage: 'Category',
    },
  },
  placeholder: {
    name: {
      id: `${scope}.placeholder.name`,
      defaultMessage: 'Username',
    },
    price: {
      id: `${scope}.placeholder.price`,
      defaultMessage: '99$',
    },
    images: {
      id: `${scope}.placeholder.images`,
      defaultMessage: 'images',
    },
    description: {
      id: `${scope}.placeholder.description`,
      defaultMessage: 'Description',
    },
  },
  message: {
    required: {
      id: `${scope}.message.required`,
      defaultMessage: 'This field is required',
    },
    length: {
      id: `${scope}.message.length`,
      defaultMessage: 'Length from 9 -15 characters',
    },
    is_number: {
      id: `${scope}.message.isNumber`,
      defaultMessage: 'This field must be a number',
    },
  },
  btn: {
    submit: {
      id: `${scope}.button.submit`,
      defaultMessage: 'Submit',
    },
  },
});
