import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

function InputSearchWithFormatMessage({ message, innerRef = {}, ...props }) {
  const intl = useIntl();

  const placeholder = intl.formatMessage(message);

  return <input {...props} placeholder={placeholder} ref={innerRef} />;
}

InputSearchWithFormatMessage.prototype = {
  message: PropTypes.object,
  innerRef: PropTypes.object,
};

export default InputSearchWithFormatMessage;
