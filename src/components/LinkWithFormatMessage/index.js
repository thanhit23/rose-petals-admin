import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

function LinkWithFormatMessage({ title, icon, to = '/' }) {
  const renderIcon = () => <FontAwesomeIcon className="mr-2" icon={icon} />;

  return (
    <Link
      to={to}
      className="flex items-center bg-[#4E97FD] hover:opacity-70 text-white font-semibold hover:text-white py-2 px-3 md:px-4 border border-[rgb(78,151,253)] hover:border-transparent rounded"
    >
      {icon && renderIcon()}
      <div className="md:text-[16px] text-[8px]">
        <FormattedMessage {...messages[title]} />
      </div>
    </Link>
  );
}

export default LinkWithFormatMessage;
