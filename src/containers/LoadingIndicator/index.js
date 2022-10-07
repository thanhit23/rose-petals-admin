import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import propTypes from 'prop-types';

import injectReducer from '../../utils/injectReducer';
import reducer from './reducers';
import Loadings from '../../components/Loading';

class Loading extends Component {
  render() {
    const { showLoading } = this.props;
    return showLoading ? <Loadings /> : '';
  }
}

Loading.propTypes = {
  showLoading: propTypes.bool,
};

const mapStateToProps = state => {
  const {
    loading: { showLoading },
  } = state;
  return {
    showLoading,
  };
};

const withConnect = connect(mapStateToProps, null);
const withReducer = injectReducer({ key: 'loading', reducer });

export default compose(withReducer, withConnect)(Loading);
