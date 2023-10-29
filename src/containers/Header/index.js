import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import propTypes from 'prop-types';

import { toggleSidebar, logout, updateAccount } from './actions';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import HeaderComponent from '../../components/Header';

function Header({ handleToggleSidebar, handleUserLogout, handleUpdateAccount, auth }) {
  const handleSidebar = () => handleToggleSidebar();

  const handleLogout = () => handleUserLogout();

  return (
    <HeaderComponent
      auth={auth}
      onUpdate={handleUpdateAccount}
      handleSidebar={handleSidebar}
      handleLogout={handleLogout}
    />
  );
}

Header.propTypes = {
  handleToggleSidebar: propTypes.func,
  handleUserLogout: propTypes.func,
};

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
    handleToggleSidebar: bindActionCreators(toggleSidebar, dispatch),
    handleUpdateAccount: bindActionCreators(updateAccount, dispatch),
    handleUserLogout: bindActionCreators(logout, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'header', saga });

export default compose(withSaga, withConnect)(Header);
