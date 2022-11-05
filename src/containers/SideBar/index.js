import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  faGlobe,
  faGauge,
  faUser,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { bindActionCreators, compose } from 'redux';

import Navigated from '../../components/Navigated';
import { toggleSidebar } from '../Header/actions';
import injectReducer from '../../utils/injectReducer';
import reducer from '../HomePage/reducers';
import messages from './messages';

function SideBar({ isSidebar, isActiveItem }) {
  const checkChildrenActive = active => active && isActiveItem();

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
                    Nguyễn Duy Thành
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
              {isSidebar && <FormattedMessage {...messages.dashboard} />}
            </a>
          </li>
          <Navigated
            isSidebar={isSidebar}
            childrenActive={checkChildrenActive}
            babel={<FormattedMessage {...messages.user} />}
            iconAfter={faUser}
            iconBefore={faChevronDown}
            item={[
              {
                path: '/admin/users',
                name: <FormattedMessage {...messages.user_list} />,
              },
              {
                path: '/admin/user',
                name: <FormattedMessage {...messages.user_add} />,
              },
            ]}
          />
          <Navigated
            isSidebar={isSidebar}
            childrenActive={checkChildrenActive}
            babel={<FormattedMessage {...messages.product} />}
            iconAfter={faGlobe}
            iconBefore={faChevronDown}
            item={[
              {
                path: '/admin/products',
                name: <FormattedMessage {...messages.product_list} />,
              },
              {
                path: '/admin/product',
                name: <FormattedMessage {...messages.product_add} />,
              },
              {
                path: '/admin/category',
                name: <FormattedMessage {...messages.product_category} />,
              },
            ]}
          />
        </ul>
        <div className="text-center bottom-0 absolute w-full">
          <hr className="m-0" />
          <p className="py-2 text-sm text-gray-700 bg-[#343a40]">Multikart</p>
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
