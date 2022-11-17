import { defineMessages } from 'react-intl';

export const scope = 'Components.Brand.edit';

export default defineMessages({
  label: {
    name: {
      id: `${scope}.label.name`,
      defaultMessage: 'Name',
    },
  },
  placeholder: {
    name: {
      id: `${scope}.placeholder.name`,
      defaultMessage: 'Name...',
    },
  },
  btn: {
    submit: {
      id: `${scope}.button.submit`,
      defaultMessage: 'Submit',
    },
  },
});
