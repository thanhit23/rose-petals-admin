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
    description: {
      id: `${scope}.placeholder.description`,
      defaultMessage: 'Description',
    },
  },
  btn: {
    submit: {
      id: `${scope}.button.submit`,
      defaultMessage: 'Submit',
    },
  },
});
