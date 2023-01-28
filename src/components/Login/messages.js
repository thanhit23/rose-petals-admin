/*
 * Login Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'Components.Login';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Sign in',
  },
  btn: {
    login: {
      id: `${scope}.button.login`,
      defaultMessage: 'Login',
    },
  },
  placeholder: {
    email: {
      id: `${scope}.placeholder.email`,
      defaultMessage: 'Email Address...',
    },
    password: {
      id: `${scope}.placeholder.password`,
      defaultMessage: 'Password...',
    },
  },
  forget_password: {
    id: `${scope}.forgetPassword`,
    defaultMessage: 'Forget Password?',
  },
  not_account: {
    id: `${scope}.notAccount`,
    defaultMessage: 'Dont have an account?',
  },
  sign_up: {
    id: `${scope}.signUp`,
    defaultMessage: 'Sign Up',
  },
  message: {
    required: {
      id: `${scope}.message.error.required`,
      defaultMessage: 'This field is required',
    },
    email: {
      id: `${scope}.message.error.email`,
      defaultMessage: 'Please enter correct email format',
    },
  },
});
