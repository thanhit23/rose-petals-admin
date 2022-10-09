import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search() {
  return (
    <div>
      <div className="relative">
        <FontAwesomeIcon
          className="text-sm text-[#8e8e8e] translate-y-[-50%] left-2.5 top-[50%] absolute"
          icon={faMagnifyingGlass}
        />
        <input
          type="password"
          className="outline-none border-[1px] border-solid border-[#eaeaea] py-2.5 pr-[15px] pl-8 rounded-[20px]"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default Search;
