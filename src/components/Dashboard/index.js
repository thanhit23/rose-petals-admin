import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronRight,
  faGlobe,
  faGear,
} from '@fortawesome/free-solid-svg-icons';

import DropdownProducts from './DropdownProducts';

function Dashboard() {
  const [openProduct, setOpenProduct] = useState();
  const children = [
    {
      path: 'product',
      name: 'Add Product',
    },
    {
      path: 'category',
      name: 'Category',
    },
  ];

  return (
    <div className="w-60 h-full shadow-md bg-white">
      <div className="pt-4 pb-2 px-6">
        <a href="#">
          <div className="flex items-center">
            <div className="shrink-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                className="rounded-full w-10"
                alt="Avatar"
              />
            </div>
            <div className="grow ml-3">
              <p className="text-sm font-semibold text-blue-600">
                Jason McCoel
              </p>
            </div>
          </div>
        </a>
      </div>
      <ul className="relative px-1">
        <li className="relative">
          <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap hover:text-[#ff8084] hover:pl-[30px] duration-300 cursor-pointer">
            <FontAwesomeIcon className="w-3 h-3 mr-3" icon={faGlobe} />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="relative">
          <button
            type="button"
            className="w-full flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap hover:text-[#ff8084] hover:pl-[30px] duration-300 cursor-pointer"
            onClick={() => setOpenProduct(!openProduct)}
          >
            <FontAwesomeIcon className="w-3 h-3 mr-3" icon={faGlobe} />
            <span>Products</span>
            <FontAwesomeIcon
              className="w-3 h-3 ml-auto"
              icon={openProduct ? faChevronDown : faChevronRight}
            />
          </button>
          {openProduct ? <DropdownProducts childrenItem={children} /> : null}
        </li>
        <li className="relative">
          <button
            type="button"
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap hover:text-[#ff8084] hover:pl-[30px] duration-300 cursor-pointer"
          >
            <FontAwesomeIcon className="w-3 h-3 mr-3" icon={faGear} />
            <span>Setting</span>
          </button>
        </li>
      </ul>
      <div className="text-center bottom-0 absolute w-full">
        <hr className="m-0" />
        <p className="py-2 text-sm text-gray-700">tailwind-elements.com</p>
      </div>
    </div>
  );
}

export default Dashboard;
