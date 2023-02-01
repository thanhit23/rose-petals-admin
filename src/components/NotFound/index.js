import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

function NotFound() {
  return (
    <div className="relative inset-0 flex h-[100vh] place-content-center place-items-center flex-col">
      <h1>
        <FormattedMessage {...messages.title} />
      </h1>
      <Link
        className="flex items-center bg-[#4E97FD] hover:opacity-70 text-white font-semibold hover:text-white py-2 px-4 mt-3 border border-[rgb(78,151,253)] hover:border-transparent rounded"
        to="/"
      >
        <FormattedMessage {...messages.button} />
      </Link>
    </div>
  );
}

export default NotFound;
