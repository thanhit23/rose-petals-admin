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
      newPassword: {
        id: `${scope}.label.password.newPassword`,
        defaultMessage: 'New Password',
      },
      confirmPassword: {
        id: `${scope}.label.password.confirmPassword`,
        defaultMessage: 'Confirm Password',
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
      defaultMessage: 'This field is required',
    },
    confirmPasswordRequired: {
      id: `${scope}.message.confirmPasswordRequired`,
      defaultMessage: 'Confirm password is required',
    },
    passwordContainNumber: {
      id: `${scope}.message.passwordContainNumber`,
      defaultMessage: 'Password must contain at least one number',
    },
    passwordRequired: {
      id: `${scope}.message.passwordRequired`,
      defaultMessage: 'Password is required',
    },
    confirmPasswordMustMatchPassword: {
      id: `${scope}.message.confirmPasswordMustMatchPassword`,
      defaultMessage: 'Confirm password must match password',
    },
    passwordMinLength: {
      id: `${scope}.message.passwordMinLength`,
      defaultMessage: 'Password must be at least 8 characters',
    },
    passwordMaxLength: {
      id: `${scope}.message.passwordMaxLength`,
      defaultMessage: 'Please enter up to 16 characters',
    },
  },
  btn: {
    submit: {
      id: `${scope}.btn.submit`,
      defaultMessage: 'Submit',
    },
  },
});
