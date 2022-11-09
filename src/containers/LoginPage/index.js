import React from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import Login from '../../components/Login';
import injectReducer from '../../utils/injectReducer';
import reducer from '../App/reducer';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import { accountLogin } from './actions';

function LoginPage({ onLogin, auth }) {
  const submit = data => onLogin(data);
  if (auth) return <Navigate to="/" replace />;

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="A Login application" />
      </Helmet>
      <div className="min-h-screen bg-[rgb(249,249,249)] flex justify-center items-center">
        <Login handleOnSubmit={submit} />
      </div>
    </>
  );
}

LoginPage.prototype = {
  onLogin: PropTypes.func,
  auth: PropTypes.object,
};

const mapStateToProps = state => {
  const {
    global: { auth },
  } = state;
  return {
    auth,
  };
};

const mapDispatchToProps = dispatch => ({
  onLogin: bindActionCreators(accountLogin, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'login', saga });
const withReducer = injectReducer({ key: 'global', reducer });

export default compose(withReducer, withSaga, withConnect)(LoginPage);
