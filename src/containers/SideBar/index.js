import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { faGlobe, faGauge, faUser } from '@fortawesome/free-solid-svg-icons';
import { bindActionCreators, compose } from 'redux';

import Navigated from '../../components/Navigated';
import { toggleSidebar } from '../Header/actions';
import injectReducer from '../../utils/injectReducer';
import reducer from '../HomePage/reducers';

function SideBar({ isSidebar, isActiveItem }) {
  const location = useLocation();

  const activeItemNavigate = active => {
    useEffect(() => {
      if (active) isActiveItem();
    });
  };

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
          <Navigated
            isSidebar={isSidebar}
            isActives={activeItemNavigate}
            babel="User"
            iconAfter={faUser}
            open={false}
            iconBefore
            pathname={location}
            item={[
              { path: '/admin/users', name: 'List Users' },
              { path: '/admin/user', name: 'Add User' },
            ]}
          />
          <Navigated
            isSidebar={isSidebar}
            isActives={activeItemNavigate}
            babel="Product"
            iconAfter={faGlobe}
            open={false}
            iconBefore
            pathname={location}
            item={[
              { path: '/admin/products', name: 'List Products' },
              { path: '/admin/product', name: 'Add Product' },
            ]}
          />
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
  isActiveItem: PropTypes.func,
};

const mapStateToProps = state => {
  const {
    home: { isSidebar },
  } = state;
  return {
    isSidebar,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isActiveItem: bindActionCreators(toggleSidebar, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });

export default compose(withConnect, withReducer)(SideBar);
