import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

function Search() {
  return (
    <div>
      <div className="relative">
        <FontAwesomeIcon
          className="text-sm text-[#8e8e8e] translate-y-[-50%] left-2.5 top-[50%] absolute"
          icon={faMagnifyingGlass}
        />
        <FormattedMessage {...messages.default}>
          {messagePlaceholder => (
            <input
              type="password"
              className="outline-none border-[1px] border-solid border-[#eaeaea] py-2.5 pr-[15px] pl-8 rounded-[20px]"
              placeholder={messagePlaceholder}
            />
          )}
        </FormattedMessage>
      </div>
    </div>
  );
}

export default Search;
