import React, { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import saga from '../../containers/HomePage/saga';
import { checkAuth } from '../../containers/HomePage/actions';
import injectSaga from '../../utils/injectSaga';
import Header from '../../containers/Header';
import SideBar from '../../containers/SideBar';
import Helmet from '../../components/Helmet';

function AuthLayout({ children, title, isSidebarOpen, auth, onCheckAuth }) {
  useEffect(() => {
    onCheckAuth();
    if (!auth) <Navigate to="/login" replace />;
  }, []);

  return (
    <>
      <Helmet title={title} />
      <section className="container">
        <div className="grid grid-cols-6">
          <SideBar />
          <div
            className={classNames(
              {
                'ml-[260px]': isSidebarOpen,
                'ml-[64px]': !isSidebarOpen,
              },
              'duration-300',
              'col-span-6',
            )}
          >
            <Header />
            <div className="px-8 mt-[80px] bg-[#f8f8f8] h-[100vh]">
              <div className="py-8">{children}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

AuthLayout.prototype = {
  isSidebarOpen: PropTypes.bool,
  auth: PropTypes.object,
  onCheckAuth: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.element,
};

const mapStateToProps = state => {
  const {
    global: {
      auth,
      sidebar: { isSidebarOpen },
    },
  } = state;
  return {
    auth,
    isSidebarOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCheckAuth: bindActionCreators(checkAuth, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withSaga, withConnect)(AuthLayout);
