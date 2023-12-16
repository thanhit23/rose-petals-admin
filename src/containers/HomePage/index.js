import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import saga from './saga';
import { checkAuth, getAnalytics as getAnalyticsAction } from './actions';
import injectSaga from '../../utils/injectSaga';
import Header from '../Header';
import Dashboard from '../SideBar';
import HomePageComponent from '../../components/HomePage';
import useResponsive from '../../hook/useResponsive';
import ModalSidebar from '../../components/ModalSidebar';
import { toggleSidebar as toggleSidebarAction } from '../Header/actions';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducers';

function HomePage({ isSidebarOpen, auth, checkAuthenticate, getAnalytics, analytics }) {
  const { isMobile } = useResponsive();

  const token = localStorage.getItem('token');

  useEffect(() => {
    checkAuthenticate();
    if (!auth) <Navigate to="/login" replace />;
    if (auth && token) getAnalytics(token);
  }, []);

  return (
    <>
      <Helmet>
        <title>Admin</title>
        <meta name="description" />
      </Helmet>
      <section className="bg-[#f7f9fc]">
        <div className="grid grid-cols-6">
          {!isMobile && <Dashboard />}
          <ModalSidebar />
          <div
            className={classNames(
              {
                'ml-[260px]': isSidebarOpen && !isMobile,
                'ml-[64px]': !isSidebarOpen && !isMobile,
              },
              'duration-300',
              'col-span-6',
            )}
          >
            <Header />
            <HomePageComponent analytics={analytics} />
          </div>
        </div>
      </section>
    </>
  );
}

HomePage.prototype = {
  isSidebarOpen: PropTypes.bool,
  auth: PropTypes.object,
  checkAuth: PropTypes.func,
  getAnalytics: PropTypes.func,
};

const mapStateToProps = state => {
  const {
    global: {
      auth,
      sidebar: { isSidebarOpen },
    },
    home: { analytics },
  } = state;
  return {
    analytics,
    auth,
    isSidebarOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkAuthenticate: bindActionCreators(checkAuth, dispatch),
    getAnalytics: bindActionCreators(getAnalyticsAction, dispatch),
    isActiveItem: bindActionCreators(toggleSidebarAction, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'home', saga });
const withReducer = injectReducer({ key: 'home', reducer });

export default compose(withSaga, withReducer, withConnect)(HomePage);
