import { FormattedMessage } from 'react-intl';
import { VALUE_MIN_LENGTH, VALUE_MAX_LENGTH } from './constants';

export const required = messages => ({
  required: {
    value: true,
    message: <FormattedMessage {...messages} />,
  },
});

export const minLength = messages => ({
  minLength: {
    value: VALUE_MIN_LENGTH,
    message: <FormattedMessage {...messages} />,
  },
});

export const maxLength = messages => ({
  maxLength: {
    value: VALUE_MAX_LENGTH,
    message: <FormattedMessage {...messages} />,
  },
});
