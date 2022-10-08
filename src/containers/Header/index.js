import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { filterProduct } from './actions';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer from './reducers';
import saga from './saga';
import HeaderComponent from '../../components/Header';

function Header() {
  return <HeaderComponent />;
}

Header.propTypes = {};

const mapDispatchToProps = dispatch => {
  return {
    onChangeSearch: bindActionCreators(filterProduct, dispatch),
  };
};

const withConnect = connect(null, mapDispatchToProps);
const withReducer = injectReducer({ key: 'header', reducer });
const withSaga = injectSaga({ key: 'header', saga });

export default compose(withReducer, withSaga, withConnect)(Header);
