import { defineMessages } from 'react-intl';

export const scope = 'Components.Brand.add';

export default defineMessages({
  label: {
    name: {
      id: `${scope}.label.name`,
      defaultMessage: 'Name',
    },
    img: {
      id: `${scope}.label.img`,
      defaultMessage: 'Image',
    },
  },
  placeholder: {
    name: {
      id: `${scope}.placeholder.name`,
      defaultMessage: 'Name...',
    },
    img: {
      id: `${scope}.placeholder.img`,
      defaultMessage: 'Image...',
    },
  },
  message: {
    required: {
      id: `${scope}.message.error.required`,
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
