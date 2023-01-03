import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import propTypes from 'prop-types';

import Loadings from '../../components/Loading';

function Loading({ showLoading }) {
  return showLoading ? <Loadings /> : '';
}

Loading.propTypes = {
  showLoading: propTypes.bool,
};

const mapStateToProps = state => {
  const {
    global: {
      loading: { showLoading },
    },
  } = state;
  return {
    showLoading,
  };
};

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(Loading);
