import { defineMessages } from 'react-intl';

export const scope = 'Components.Add_category';

export default defineMessages({
  label_name: {
    id: `${scope}.label.name`,
    defaultMessage: 'Name',
  },
  placeholder_name: {
    id: `${scope}.placeholder.name`,
    defaultMessage: 'Name...',
  },
  message_error_required: {
    id: `${scope}.message.error.required`,
    defaultMessage: 'This is required',
  },
  btn_submit: {
    id: `${scope}.button.submit`,
    defaultMessage: 'Submit',
  },
});
