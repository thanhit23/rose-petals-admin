import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
import Search from '../Search';

function HeaderComponent({ handleSidebar, handleLogout }) {
  const [dropdown, setDropDown] = useState(false);
  return (
    <header className="relative z-[100]">
      <div className="shadow-md absolute inset-x-0 top-0 bg-white">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <button type="button" onClick={handleSidebar}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            <nav className="space-x-10 md:flex">
              <Search />
              <div className="relative">
                <button type="button" onClick={() => setDropDown(!dropdown)}>
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                    alt=""
                    className="w-[40px] account-img cursor-pointer"
                  />
                </button>
                {dropdown && (
                  <ul
                    aria-labelledby="dropdownDefault"
                    className="dropdown-menu w-[120px] absolute bg-white right-[-5px] p-5 shadow-lg rounded-[5px]"
                  >
                    {/* eslint-disable-next-line max-len */}
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                    <li className="cursor-pointer" onClick={handleLogout}>
                      logout
                    </li>
                  </ul>
                )}
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
};

export default HeaderComponent;
