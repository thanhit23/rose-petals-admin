import React, { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { compose } from 'redux';
import { toast, ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';

import routes from '../../routes';
import LoadingIndicator from '../LoadingIndicator';
import 'react-toastify/dist/ReactToastify.css';
import injectReducer from '../../utils/injectReducer';
import reducer from '../ListUser/reducers';

function App({ toastMessage: { message, type } }) {
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    type ? toast.success(message) : toast.error(message);
  }, [message]);
  return (
    <>
      <LoadingIndicator />
      <ToastContainer />
      {useRoutes(routes())}
    </>
  );
}
const mapStateToProps = state => {
  const {
    global: { toastMessage },
  } = state;
  return {
    toastMessage,
  };
};
const withConnect = connect(mapStateToProps, null);
const withReducer = injectReducer({ key: 'user', reducer });

export default compose(withReducer, withConnect)(App);
