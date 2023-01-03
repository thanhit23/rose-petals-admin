import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import propTypes from 'prop-types';

import Loadings from '../../components/LoadingTable';

function LoadingTable({ showLoadingTable }) {
  return showLoadingTable ? (
    <tr className="flex justify-center w-full absolute bg-[#0000000d] inset-0">
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
    global: {
      loading: { showLoadingTable },
    },
  } = state;
  return {
    showLoadingTable,
  };
};

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(LoadingTable);
