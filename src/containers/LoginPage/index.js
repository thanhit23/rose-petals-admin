import React from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import Login from '../../components/Login';
import injectReducer from '../../utils/injectReducer';
import reducer from '../App/reducer';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import { fetchLogin } from './actions';

function LoginPage({ onLogin, auth }) {
  const submit = ({ email, password }) => {
    onLogin({ email, password });
  };

  if (auth) return <Navigate to="/admin" replace />;

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="A Login application" />
      </Helmet>
      <div className="min-h-screen bg-[rgb(249,249,249)] flex justify-center items-center">
        <Login onSubmit={submit} />
      </div>
    </>
  );
}

const mapStateToProps = state => {
  const {
    global: { auth },
  } = state;
  return {
    auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: bindActionCreators(fetchLogin, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'login', saga });
const withReducer = injectReducer({ key: 'global', reducer });

export default compose(withReducer, withSaga, withConnect)(LoginPage);
