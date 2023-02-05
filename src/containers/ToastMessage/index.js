import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import propTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { TOAST_ERROR, TOAST_INFO, TOAST_SUCCESS } from './constants';
import { resetMessage as resetMessageAction } from './actions';

function Toast({ toast: { message, type }, resetMessage }) {
  useEffect(() => {
    type === TOAST_SUCCESS && toast.success(message);
    type === TOAST_ERROR && toast.error(message);
    type === TOAST_INFO && toast.info(message);
    message && resetMessage();
  }, [message]);

  return <ToastContainer />;
}

Toast.propTypes = {
  type: propTypes.string,
  message: propTypes.string,
  resetMessage: propTypes.func,
};

const mapDispatchToProps = dispatch => {
  return {
    resetMessage: bindActionCreators(resetMessageAction, dispatch),
  };
};

const mapStateToProps = state => {
  const {
    // eslint-disable-next-line no-shadow
    global: { toast },
  } = state;
  return {
    toast,
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Toast);
