import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faGlobe,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import DropdownProducts from '../DropdownProducts';

function DashboardItem({ children }) {
  const [openProduct, setOpenProduct] = useState();
  return children.map(({ title, childrenItem }, i) => {
    return (
      <li key={i} className="relative">
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 duration-300 cursor-pointer"
          onClick={() => setOpenProduct(!openProduct)}
        >
          <FontAwesomeIcon className="w-3 h-3 mr-3" icon={faGlobe} />
          <span>{title}</span>
          <FontAwesomeIcon
            className="w-3 h-3 ml-auto"
            icon={openProduct ? faChevronDown : faChevronRight}
          />
        </div>
        {openProduct ? <DropdownProducts childrenItem={childrenItem} /> : null}
      </li>
    );
  });
}

export default DashboardItem;
