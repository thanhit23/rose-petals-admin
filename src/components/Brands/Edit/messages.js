import { defineMessages } from 'react-intl';

export const scope = 'Components.Brand.edit';

export default defineMessages({
  label: {
    name: {
      id: `${scope}.label.name`,
      defaultMessage: 'Name',
    },
    images: {
      id: `${scope}.label.images`,
      defaultMessage: 'Images',
    },
  },
  placeholder: {
    name: {
      id: `${scope}.placeholder.name`,
      defaultMessage: 'Name...',
    },
    images: {
      id: `${scope}.placeholder.images`,
      defaultMessage: 'Images...',
    },
  },
  message: {
    required: {
      id: `${scope}.message.required`,
      defaultMessage: 'This field is required',
    },
  },
  btn: {
    submit: {
      id: `${scope}.button.submit`,
      defaultMessage: 'Submit',
    },
  },
});
