import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Search from '../Search';
import messages from './messages';

const renderLogout = handleLogout => (
  <ul
    aria-labelledby="dropdownDefault"
    className="dropdown-menu w-[120px] absolute bg-white right-[-5px] py-3 shadow-default rounded-[5px]"
  >
    <li
      className="cursor-pointer px-3 py-2 hover:bg-[#f1f1f1] transition"
      onClick={handleLogout}
      aria-hidden
    >
      <FormattedMessage {...messages.logout} />
    </li>
  </ul>
);

function HeaderComponent({ handleSidebar, handleLogout }) {
  const [dropdown, setDropDown] = useState(false);
  return (
    <header className="relative z-[90]">
      <div className="shadow-md absolute inset-x-0 top-0 bg-white">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <button type="button" onClick={handleSidebar}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            <nav className="space-x-10 md:flex">
              <Search className="w-[356px] outline-none py-2.5 px-8 rounded-lg bg-[#f7f9fc]" />
              <div className="relative">
                <button type="button" onClick={() => setDropDown(!dropdown)}>
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                    alt=""
                    className="w-[40px] account-img cursor-pointer"
                  />
                </button>
                {dropdown && renderLogout(handleLogout)}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

HeaderComponent.prototype = {
  handleSidebar: PropTypes.func,
  handleLogout: PropTypes.func,
};

export default HeaderComponent;
