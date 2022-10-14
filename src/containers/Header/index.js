import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import propTypes from 'prop-types';

import { toggleSidebar } from './actions';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer from '../HomePage/reducers';
import saga from './saga';
import HeaderComponent from '../../components/Header';

function Header({ onToggleSidebar }) {
  const handleSidebar = () => {
    onToggleSidebar();
  };
  return <HeaderComponent handleSidebar={handleSidebar} />;
}

Header.propTypes = {
  onToggleSidebar: propTypes.func,
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleSidebar: bindActionCreators(toggleSidebar, dispatch),
  };
};

const withConnect = connect(null, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'header', saga });

export default compose(withReducer, withSaga, withConnect)(Header);
