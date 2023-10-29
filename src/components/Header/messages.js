import { defineMessages } from 'react-intl';

export const scope = 'Components.Header';

export default defineMessages({
  setting: {
    id: `${scope}.setting`,
    defaultMessage: 'Setting',
  },
  logout: {
    id: `${scope}.logout`,
    defaultMessage: 'Logout',
  },
  label: {
    email: {
      id: `${scope}.label.email`,
      defaultMessage: 'Email',
    },
    password: {
      current: {
        id: `${scope}.label.password.current`,
        defaultMessage: 'Current Password',
      },
      new: {
        id: `${scope}.label.password.new`,
        defaultMessage: 'New Password',
      },
    },
    name: {
      id: `${scope}.label.name`,
      defaultMessage: 'Name',
    },
  },
  placeholder: {
    name: {
      id: `${scope}.placeholder.name`,
      defaultMessage: 'Enter your name',
    },
    password: {
      current: {
        id: `${scope}.placeholder.password.current`,
        defaultMessage: 'Enter your current password',
      },
      new: {
        id: `${scope}.placeholder.password.new`,
        defaultMessage: 'Enter new password',
      },
    },
  },
  message: {
    required: {
      id: `${scope}.message.required`,
      defaultMessage: 'Name is required',
    },
  },
  btn: {
    submit: {
      id: `${scope}.btn.submit`,
      defaultMessage: 'Submit',
    },
  },
});
