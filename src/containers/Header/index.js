import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import propTypes from 'prop-types';

import { toggleSidebar, logout } from './actions';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import HeaderComponent from '../../components/Header';

function Header({ handleToggleSidebar, handleUserLogout }) {
  const handleSidebar = () => handleToggleSidebar();

  const handleLogout = () => handleUserLogout();

  return (
    <HeaderComponent
      handleSidebar={handleSidebar}
      handleLogout={handleLogout}
    />
  );
}

Header.propTypes = {
  handleToggleSidebar: propTypes.func,
  handleUserLogout: propTypes.func,
};

const mapDispatchToProps = dispatch => {
  return {
    handleToggleSidebar: bindActionCreators(toggleSidebar, dispatch),
    handleUserLogout: bindActionCreators(logout, dispatch),
  };
};

const withConnect = connect(null, mapDispatchToProps);
const withSaga = injectSaga({ key: 'header', saga });

export default compose(withSaga, withConnect)(Header);
