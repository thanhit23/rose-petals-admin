import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronRight,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import DropdownProducts from '../SideBar/DropdownProducts';

function Dropdown() {
  return (
    <li className="relative">
      <button
        type="button"
        className={classNames(
          'rounded w-full px-[18px] flex items-center text-sm h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap hover:bg-[#007bff] duration-300 cursor-pointer',
          { 'hover:pl-[25px]': isSidebar },
        )}
        onClick={() => isSidebar && setOpenUser(!openUser)}
      >
        <FontAwesomeIcon
          className={classNames('w-5 h-5', { 'mr-3': isSidebar })}
          icon={faUser}
        />
        {isSidebar && (
          <>
            <span>User</span>
            <FontAwesomeIcon
              className="w-3 h-3 ml-auto"
              icon={openUser ? faChevronDown : faChevronRight}
            />
          </>
        )}
      </button>
      {openUser ? <DropdownProducts childrenItem={childUsers} /> : null}
    </li>
  );
}
