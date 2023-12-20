import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import propTypes from 'prop-types';

import { toggleSidebar, logout, updateAccount, changePassword } from './actions';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import HeaderComponent from '../../components/Header';

function Header({ handleToggleSidebar, handleUserLogout, handleUpdateAccount, handleChangePassword, auth }) {
  const handleSidebar = () => handleToggleSidebar();

  const handleLogout = () => handleUserLogout();

  return (
    <HeaderComponent
      auth={auth}
      onUpdate={handleUpdateAccount}
      onChangePassword={handleChangePassword}
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
    handleChangePassword: bindActionCreators(changePassword, dispatch),
    handleUserLogout: bindActionCreators(logout, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'header', saga });

export default compose(withSaga, withConnect)(Header);
