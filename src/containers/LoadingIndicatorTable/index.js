import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import propTypes from 'prop-types';

import injectReducer from '../../utils/injectReducer';
import reducer from './reducers';
import Loadings from '../../components/LoadingTable';

function LoadingTable({ showLoadingTable }) {
  return showLoadingTable ? (
    <div className="flex justify-center w-full h-24">
      <Loadings />
    </div>
  ) : (
    ''
  );
}

LoadingTable.propTypes = {
  showLoadingTable: propTypes.bool,
};

const mapStateToProps = state => {
  const {
    loadingTable: { showLoadingTable },
  } = state;
  return {
    showLoadingTable,
  };
};

const withConnect = connect(mapStateToProps, null);
const withReducer = injectReducer({ key: 'loadingTable', reducer });

export default compose(withReducer, withConnect)(LoadingTable);
