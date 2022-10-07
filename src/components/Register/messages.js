/*
 * Register Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'components.Login';

export default defineMessages({
  create_account: {
    id: `${scope}.create.account`,
    defaultMessage: 'Create An Account',
  },
  account_messages: {
    id: `${scope}.messages.create.account.enjoy`,
    defaultMessage: 'Create an account to enjoy...',
  },
  btn_create_account: {
    id: `${scope}.button.create.account`,
    defaultMessage: 'Create Account',
  },
  message_create_account: {
    id: `${scope}.messages.create.account`,
    defaultMessage: 'Already Have An Account?',
  },
  sign_in: {
    id: `${scope}.signIn`,
    defaultMessage: 'Sign In',
  },
});
