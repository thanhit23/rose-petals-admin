import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

function TextareaWithFormatMessage({ message, validate = {}, ...props }) {
  const intl = useIntl();

  const placeholder = intl.formatMessage(message);

  return <textarea {...validate} {...props} placeholder={placeholder} />;
}

TextareaWithFormatMessage.prototype = {
  message: PropTypes.object,
  validate: PropTypes.object,
};

export default TextareaWithFormatMessage;
