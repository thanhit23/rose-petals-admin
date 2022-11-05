import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

function Button({ title, icon }) {
  const elementIcon = <FontAwesomeIcon className="mr-2" icon={icon} />;
  return (
    <Link
      to="/admin/user"
      className="flex items-center bg-[#4E97FD] hover:opacity-70 text-white font-semibold hover:text-white py-2 px-4 border border-[rgb(78,151,253)] hover:border-transparent rounded"
    >
      {icon && elementIcon}
      <FormattedMessage {...messages[title]} />
    </Link>
  );
}

export default Button;
