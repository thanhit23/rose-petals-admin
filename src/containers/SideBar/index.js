import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { faUserGroup, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { bindActionCreators, compose } from 'redux';

import Navigated from '../../components/Navigated';
import { toggleSidebar } from '../Header/actions';
import injectReducer from '../../utils/injectReducer';
import reducer from '../HomePage/reducers';
import messages from './messages';
import { ReactComponent as Product } from '../../resources/images/products.svg';
import { ReactComponent as Dashboard } from '../../resources/images/dashboard.svg';
import { ReactComponent as Order } from '../../resources/images/order.svg';

function SideBar({ isSidebar, isActiveItem }) {
  const checkChildrenActive = active => active && isActiveItem();

  const urlAvatar =
    'https://scontent.fdad1-4.fna.fbcdn.net/v/t1.15752-9/317828686_542555651100563_8603678477965520851_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=FZexx9lU8zIAX_wCAhP&_nc_ht=scontent.fdad1-4.fna&oh=03_AdQFZ7wVZTDwd7L1J_eZ8JrGYaMgj33Qu5QPxWPDiSFdfw&oe=63CBCB86';

  return (
    <div
      className={classNames(
        'fixed top-0 bottom-0 left-0 duration-300 w-[260px] flex',
        { 'w-[64px]': !isSidebar },
      )}
    >
      <div className="w-full h-full shadow-md bg-[#2B3445] text-white">
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
                  src={urlAvatar}
                  className="rounded-full w-10 h-10 object-cover"
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
        <ul className="relative px-3 mt-8 overflow-scroll max-h-[calc(100vh-70px)]">
          <Navigated
            isSidebar={isSidebar}
            pathRedirect="/"
            childrenActive={checkChildrenActive}
            babel={<FormattedMessage {...messages.dashboard} />}
            iconSvg={<Dashboard className="w-5 h-5 mr-3" />}
          />
          <Navigated
            isSidebar={isSidebar}
            childrenActive={checkChildrenActive}
            babel={<FormattedMessage {...messages.user} />}
            iconAfter={faUserGroup}
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
            iconSvg={<Product className="w-5 h-5 mr-3" />}
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
                path: '/admin/categories',
                name: <FormattedMessage {...messages.product_category} />,
              },
              {
                path: '/admin/brands',
                name: <FormattedMessage {...messages.product_brand} />,
              },
            ]}
          />
          <Navigated
            isSidebar={isSidebar}
            childrenActive={checkChildrenActive}
            babel={<FormattedMessage {...messages.order} />}
            iconSvg={<Order className="w-5 h-5 mr-3" />}
            iconBefore={faChevronDown}
            item={[
              {
                path: '/admin/orders',
                name: <FormattedMessage {...messages.order_list} />,
              },
              {
                path: '/admin/order/detail',
                name: <FormattedMessage {...messages.order_list} />,
              },
            ]}
          />
        </ul>
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
