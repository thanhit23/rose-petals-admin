import React from 'react';
import { Helmet } from 'react-helmet';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import classNames from 'classnames';

import injectReducer from '../../utils/injectReducer';
import reducer from './reducers';
import saga from './saga';
import { openModal } from './actions';
import injectSaga from '../../utils/injectSaga';
import Header from '../Header';
import LoadingIndicator from '../LoadingIndicator';
import Dashboard from '../../components/Dashboard';

function HomePage({ isSidebar }) {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <ToastContainer />
      <Header />
      <LoadingIndicator />
      <section className="mt-[78px] container">
        <div className="grid grid-cols-6">
          <div
            className={classNames(
              'fixed top-[78px] bottom-0 left-0 duration-300',
              { 'left-[-240px]': !isSidebar },
            )}
          >
            <Dashboard />
          </div>
          <div
            className={classNames({
              'col-start-2 col-span-5': isSidebar,
              'col-start-1 col-span-6': !isSidebar,
            })}
          >
            thanh
          </div>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = state => {
  const {
    home: { isModal, isSidebar },
  } = state;
  return {
    isSidebar,
    isModal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOpenModal: bindActionCreators(openModal, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
