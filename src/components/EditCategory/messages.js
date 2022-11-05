import { defineMessages } from 'react-intl';

export const scope = 'Components.AddUser';

export default defineMessages({
  label_name: {
    id: `${scope}.label.name`,
    defaultMessage: 'Username',
  },
  placeholder_name: {
    id: `${scope}.placeholder.name`,
    defaultMessage: 'Username',
  },
  message_error_required: {
    id: `${scope}.message.error.required`,
    defaultMessage: 'This is required',
  },
  message_error_maxLength: {
    id: `${scope}.message.error.maxLength`,
    defaultMessage: 'Max length exceeded',
  },
  message_error_minLength: {
    id: `${scope}.message.error.minLength`,
    defaultMessage: 'Min length not reached',
  },
  message_error_isNumber: {
    id: `${scope}.message.error.isNumber`,
    defaultMessage: 'This field must be a number',
  },
  btn_submit: {
    id: `${scope}.button.submit`,
    defaultMessage: 'Submit',
  },
});
