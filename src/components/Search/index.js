import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import messages from './messages';
// import { useDebounce } from '../../hook';
import InputSearchWithFormatMessage from '../InputSearchWithFormatMessage';

function Search({ handleKeywordSearch, message = 'default' }) {
  const [value, setValue] = useState('');
  const debounceLoadData = useCallback(
    // eslint-disable-next-line no-shadow
    debounce(value => handleKeywordSearch(value), 1000),
    [],
  );

  const inputRef = useRef();

  useEffect(() => {
    if (!value.trim()) {
      setValue(value.trim());
    }
  }, [value]);

  const handleClearInput = () => {
    setValue('');
    inputRef.current.focus();
  };

  // eslint-disable-next-line no-shadow
  const handleSetValue = ({ target: { value } }) => {
    setValue(value);
    debounceLoadData(value);
  };

  return (
    <div className="relative">
      <FontAwesomeIcon
        className="text-sm text-[#8e8e8e] translate-y-[-50%] left-2.5 top-[50%] absolute"
        icon={faMagnifyingGlass}
      />
      <InputSearchWithFormatMessage
        innerRef={inputRef}
        message={messages[message]}
        type="text"
        className="w-[356px] outline-none border-[1px] border-solid border-[#eaeaea] py-2.5 px-8 rounded-lg"
        value={value}
        onChange={handleSetValue}
      />
      {value && (
        <button
          className="hover:opacity-70"
          type="button"
          onClick={handleClearInput}
        >
          <FontAwesomeIcon
            className="text-sm text-[#8e8e8e] translate-y-[-50%] right-4 top-[50%] absolute cursor-pointer"
            icon={faCircleXmark}
          />
        </button>
      )}
    </div>
  );
}

Search.prototype = {
  message: PropTypes.string,
  handleKeywordSearch: PropTypes.func,
};

export default Search;
