import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import propTypes from 'prop-types';

import { toggleSidebar, logout } from './actions';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer from '../HomePage/reducers';
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
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'header', saga });

export default compose(withReducer, withSaga, withConnect)(Header);
