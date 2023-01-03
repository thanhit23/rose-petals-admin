import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import propTypes from 'prop-types';

import injectReducer from '../../utils/injectReducer';
import reducer from './reducers';
import Loadings from '../../components/LoadingTable';

function LoadingTable({ showLoadingTable }) {
  return showLoadingTable ? (
    <tr className="lex justify-center w-full absolute bg-[#0000000d] inset-0">
      <Loadings />
    </tr>
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
