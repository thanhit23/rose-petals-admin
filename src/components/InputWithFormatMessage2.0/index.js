import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

function InputWithFormatMessage20({ message, validate = {}, ...props }) {
  const intl = useIntl();

  const placeholder = intl.formatMessage(message);

  return <input {...validate} {...props} placeholder={placeholder} />;
}

InputWithFormatMessage20.prototype = {
  message: PropTypes.object,
  validate: PropTypes.object,
};

export default InputWithFormatMessage20;
