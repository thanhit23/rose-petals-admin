import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

function LabelWithFormatMessage({ message, requiredField, htmlFor, ...props }) {
  const renderRequiredIcon = <span className="text-[14px] ml-1 text-[#d1373a]">*</span>;

  return (
    <label {...props} htmlFor={htmlFor}>
      <span className="z-[1]">
        <FormattedMessage {...message} />
      </span>
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
