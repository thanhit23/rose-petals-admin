import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import {
  faMagnifyingGlass,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

import messages from './messages';
import InputSearchWithFormatMessage from '../InputSearchWithFormatMessage';

function Search({
  handleKeywordSearch,
  valueSearch = '',
  message = 'default',
}) {
  const [keyword, setKeyword] = useState('');

  const inputRef = useRef();

  useEffect(() => {
    if (!keyword.trim()) setKeyword(keyword.trim());
  }, [keyword]);

  useEffect(() => {
    if (valueSearch) setKeyword(valueSearch);
  }, [valueSearch]);

  const debounceLoadData = useCallback(
    debounce(name => handleKeywordSearch({ name }), 1000),
    [],
  );

  const handleClearInput = () => {
    setKeyword('');
    handleKeywordSearch({ name: '' });
    inputRef.current.focus();
  };

  const handleSetValue = ({ target: { value } }) => {
    setKeyword(value);
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
        value={keyword}
        onChange={handleSetValue}
      />
      {keyword && (
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
  valueSearch: PropTypes.string,
  handleKeywordSearch: PropTypes.func,
};

export default Search;
