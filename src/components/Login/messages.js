/*
 * Login Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'components.Register';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Login to continue',
  },
  btn_login: {
    id: `${scope}.button.login`,
    defaultMessage: 'Login',
  },
  message_login_account: {
    id: `${scope}.messages.create.account`,
    defaultMessage: 'Already Have An Account?',
  },
  sign_up: {
    id: `${scope}.signUp`,
    defaultMessage: 'Sign Up',
  },
});
