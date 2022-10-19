import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  faChevronDown,
  faChevronRight,
  faGlobe,
  faGauge,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import DropdownProducts from './DropdownProducts';

function SideBar({ isSidebar }) {
  // const location = useLocation();
  const [openProduct, setOpenProduct] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const childProduct = [
    {
      path: 'product',
      name: 'Add Product',
    },
    {
      path: 'category',
      name: 'Category',
    },
  ];
  const childUsers = [
    {
      path: '/admin/users',
      name: 'List User',
    },
  ];

  // const checkLocation = (paths, setOpen) => {
  //   const { pathname } = location;
  //   paths.map(({ path }) => {
  //     // eslint-disable-next-line no-unused-expressions
  //     pathname === path ? setOpen(true) : null;
  //   });
  // };

  return (
    <div
      className={classNames(
        'fixed top-0 bottom-0 left-0 duration-300 w-[260px]',
        { 'w-[64px]': !isSidebar },
      )}
    >
      <div className="w-full h-full shadow-md bg-[#343a40] text-white">
        <div
          className={classNames(
            'pt-4 pb-2',
            { 'px-[18px]': isSidebar },
            { 'px-3': !isSidebar },
          )}
        >
          <a href="#">
            <div className="flex items-center">
              <div className="shrink-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                  className="rounded-full w-10"
                  alt="Avatar"
                />
              </div>
              {isSidebar && (
                <div className="grow ml-3">
                  <p className="text-sm font-semibold text-blue-600">
                    Jason McCoel
                  </p>
                </div>
              )}
            </div>
          </a>
        </div>
        <ul className="relative px-1">
          <li className="relative">
            <a
              className={classNames(
                'rounded px-[18px] flex items-center text-sm h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap hover:bg-[#007bff] duration-300 cursor-pointer',
                { 'hover:pl-[25px]': isSidebar },
              )}
            >
              <FontAwesomeIcon
                className={classNames('w-5 h-5', { 'mr-3': isSidebar })}
                icon={faGauge}
              />
              {isSidebar && <span>Dashboard</span>}
            </a>
          </li>
          <li className="relative">
            <button
              type="button"
              className={classNames(
                'rounded w-full px-[18px] flex items-center text-sm h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap hover:bg-[#007bff] duration-300 cursor-pointer',
                { 'hover:pl-[25px]': isSidebar },
              )}
              onClick={() => isSidebar && setOpenProduct(!openProduct)}
            >
              <FontAwesomeIcon
                className={classNames('w-5 h-5', { 'mr-3': isSidebar })}
                icon={faGlobe}
              />
              {isSidebar && (
                <>
                  <span>Products</span>
                  <FontAwesomeIcon
                    className="w-3 h-3 ml-auto"
                    icon={openProduct ? faChevronDown : faChevronRight}
                  />
                </>
              )}
            </button>
            {openProduct ? (
              <DropdownProducts childrenItem={childProduct} />
            ) : null}
          </li>
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
        </ul>
        <div className="text-center bottom-0 absolute w-full">
          <hr className="m-0" />
          <p className="py-2 text-sm text-gray-700">Multikart</p>
        </div>
      </div>
    </div>
  );
}

SideBar.prototype = {
  isSidebar: PropTypes.bool,
};

const mapStateToProps = state => {
  const {
    home: { isSidebar },
  } = state;
  return {
    isSidebar,
  };
};

const withConnect = connect(mapStateToProps, null);

export default withConnect(SideBar);
