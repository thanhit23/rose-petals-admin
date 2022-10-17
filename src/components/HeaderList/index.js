import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import Search from '../Search';

function HeaderList({ btnAdd, messages }) {
  return (
    <div className="flex justify-between">
      <Search message={messages} />
      <button
        type="button"
        className="bg-transparent hover:bg-[rgb(78,151,253)] text-[rgb(78,151,253)] font-semibold hover:text-white py-2 px-4 border border-[rgb(78,151,253)] hover:border-transparent rounded"
      >
        <FontAwesomeIcon className="mr-2" icon={faPlus} />
        {btnAdd}
      </button>
    </div>
  );
}

HeaderList.propTypes = {
  btnAdd: PropTypes.string,
  messages: PropTypes.string,
};

export default HeaderList;
