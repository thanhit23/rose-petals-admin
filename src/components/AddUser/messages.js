/*
 *
 * Component Add User Messages
 *
 */
import { defineMessages } from 'react-intl';

export const scope = 'components.AddUser';

export default defineMessages({
  label_name: {
    id: `${scope}.label.name`,
    defaultMessage: 'Username',
  },
  label_phoneNumber: {
    id: `${scope}.label.phoneNumber`,
    defaultMessage: 'Phone Number',
  },
  label_gender: {
    id: `${scope}.label.gender`,
    defaultMessage: 'Gender',
  },
  label_email: {
    id: `${scope}.label.email`,
    defaultMessage: 'Email',
  },
  placeholder_name: {
    id: `${scope}.placeholder.name`,
    defaultMessage: 'Username',
  },
  placeholder_phoneNumber: {
    id: `${scope}.placeholder.phoneNumber`,
    defaultMessage: '+84 123-456-789',
  },
  placeholder_email: {
    id: `${scope}.placeholder.email`,
    defaultMessage: 'abc@gmail.com',
  },
});
