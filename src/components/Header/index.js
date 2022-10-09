import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import DropdownAccount from './DropdowAccount';
import Search from '../Search';

function HeaderComponent({ handleSidebar }) {
  const [dropdown, setDropdown] = useState(false);
  const elementDropdown = dropdown ? <DropdownAccount /> : null;

  return (
    <header className="fixed z-[100]">
      <div className="shadow-md fixed inset-x-0 top-0 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <button
                type="button"
                onClick={handleSidebar}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            <nav className="space-x-10 md:flex">
              <Search />
              <div>
                <div className="relative">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                    alt=""
                    className="w-[40px]"
                    onFocus={() => console.log('onFocus')}
                    onBlur={() => console.log('onBlur')}
                    onMouseOver={() => setDropdown(true)}
                    onMouseOut={() => setDropdown(false)}
                  />
                  {elementDropdown}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
