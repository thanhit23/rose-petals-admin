import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import propTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';

import injectReducer from '../../utils/injectReducer';
import reducer from './reducers';
import 'react-toastify/dist/ReactToastify.css';
import { TOAST_ERROR, TOAST_INFO, TOAST_SUCCESS } from './constants';

function Toast({ toast: { message, type } }) {
  useEffect(() => {
    if (type === TOAST_SUCCESS) toast.success(message);
    if (type === TOAST_ERROR) toast.error(message);
    if (type === TOAST_INFO) toast.info(message);
  }, [message]);

  return <ToastContainer />;
}

Toast.propTypes = {
  message: propTypes.string,
  type: propTypes.string,
};

const mapStateToProps = state => {
  // eslint-disable-next-line no-shadow
  const { toast } = state;
  return {
    toast,
  };
};

const withConnect = connect(mapStateToProps, null);
const withReducer = injectReducer({ key: 'toast', reducer });

export default compose(withReducer, withConnect)(Toast);
