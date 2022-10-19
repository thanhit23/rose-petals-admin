import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import injectReducer from '../../utils/injectReducer';
import reducer from '../../containers/HomePage/reducers';
import saga from '../../containers/HomePage/saga';
import { checkAuth } from '../../containers/HomePage/actions';
import injectSaga from '../../utils/injectSaga';
import Header from '../../containers/Header';
import Dashboard from '../../containers/SideBar';

function AuthLayout({ children, title, isSidebar, auth, onCheckAuth }) {
  useEffect(() => {
    onCheckAuth();
    if (!auth) <Navigate to="/login" replace />;
  }, []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <section className="container">
        <div className="grid grid-cols-6">
          <Dashboard />
          <div
            className={classNames(
              {
                'ml-[260px]': isSidebar,
                'ml-[64px]': !isSidebar,
              },
              'duration-300',
              'col-span-6',
            )}
          >
            <Header />
            <div className="px-8 mt-[80px] bg-[#f8f8f8]">
              <div className="py-8">{children}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

AuthLayout.prototype = {
  isSidebar: PropTypes.bool,
  auth: PropTypes.object,
  onCheckAuth: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.element,
};

const mapStateToProps = state => {
  const {
    home: { isSidebar },
    global: { auth },
  } = state;
  return {
    auth,
    isSidebar,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCheckAuth: bindActionCreators(checkAuth, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(AuthLayout);
