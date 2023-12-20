import { defineMessages } from 'react-intl';

export const scope = 'Components.Product';

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
    images: {
      id: `${scope}.label.images`,
      defaultMessage: 'Images',
    },
    size: {
      id: `${scope}.label.size`,
      defaultMessage: 'Size',
    },
    small: {
      id: `${scope}.label.small`,
      defaultMessage: 'Small',
    },
    medium: {
      id: `${scope}.label.medium`,
      defaultMessage: 'Medium',
    },
    large: {
      id: `${scope}.label.large`,
      defaultMessage: 'Large',
    },
    sizeXl: {
      id: `${scope}.label.sizeXl`,
      defaultMessage: 'XL',
    },
    rating: {
      id: `${scope}.label.rating`,
      defaultMessage: 'Rating',
    },
    quantity: {
      id: `${scope}.label.quantity`,
      defaultMessage: 'Quantity',
    },
    category: {
      id: `${scope}.label.category`,
      defaultMessage: 'Category',
    },
    brand: {
      id: `${scope}.label.brand`,
      defaultMessage: 'Brand',
    },
  },
  placeholder: {
    name: {
      id: `${scope}.placeholder.name`,
      defaultMessage: 'Name',
    },
    price: {
      id: `${scope}.placeholder.price`,
      defaultMessage: 'Price',
    },
    rating: {
      id: `${scope}.placeholder.rating`,
      defaultMessage: 'Rating',
    },
    quantity: {
      id: `${scope}.placeholder.quantity`,
      defaultMessage: 'Quantity',
    },
    description: {
      id: `${scope}.placeholder.description`,
      defaultMessage: 'Description....',
    },
    images: {
      id: `${scope}.placeholder.images`,
      defaultMessage: 'Images.....',
    },
  },
  message: {
    required: {
      id: `${scope}.message.error.required`,
      defaultMessage: 'This field is required',
    },
    length: {
      id: `${scope}.message.error.length`,
      defaultMessage: 'Length from 9 -15 characters',
    },
    is_number: {
      id: `${scope}.message.error.isNumber`,
      defaultMessage: 'This field must be a number',
    },
  },
  btn_submit: {
    id: `${scope}.button.submit`,
    defaultMessage: 'Submit',
  },
});
