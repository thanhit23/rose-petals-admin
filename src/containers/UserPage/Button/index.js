import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from '../messages';

function Button() {
  return (
    <button
      type="button"
      className="bg-[#4E97FD] hover:opacity-70 text-white font-semibold hover:text-white py-2 px-4 border border-[rgb(78,151,253)] hover:border-transparent rounded"
    >
      <FontAwesomeIcon className="mr-2" icon={faPlus} />
      <FormattedMessage {...messages.add} />
    </button>
  );
}

export default Button;
