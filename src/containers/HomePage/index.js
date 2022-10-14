import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';

import injectReducer from '../../utils/injectReducer';
import reducer from './reducers';
import saga from './saga';
import { checkAuth } from './actions';
import injectSaga from '../../utils/injectSaga';
import Header from '../Header';
import Dashboard from '../Dashboard';
import ProductPage from '../ProductPage';

function HomePage({ isSidebar, auth, onCheckAuth }) {
  useEffect(() => {
    console.log(auth, 'auth');
    onCheckAuth();

    if (!auth) {
      console.log('oi no');
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Admin</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
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
            <div className="px-8 mt-[80px]">
              <div className="py-8">
                <ProductPage />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

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

export default compose(withReducer, withSaga, withConnect)(HomePage);
