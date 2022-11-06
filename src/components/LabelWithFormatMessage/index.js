import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

function LabelWithFormatMessage({ message, requiredField, htmlFor, ...props }) {
  const renderRequiredIcon = (
    <span className="text-[#d1373a] text-base">*</span>
  );

  return (
    <label {...props} htmlFor={htmlFor}>
      <FormattedMessage {...message} />
      {requiredField && renderRequiredIcon}
    </label>
  );
}

LabelWithFormatMessage.prototype = {
  message: PropTypes.object,
  requiredField: PropTypes.bool,
  htmlFor: PropTypes.string,
};

export default LabelWithFormatMessage;
