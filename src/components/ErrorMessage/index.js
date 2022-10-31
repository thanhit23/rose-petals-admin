import PropTypes from 'prop-types';

function ErrorMessage({ name }) {
  return (
    name && <span className="text-[#d1373a] text-[14px]">{name.message}</span>
  );
}

ErrorMessage.prototype = {
  name: PropTypes.string,
};

export default ErrorMessage;
