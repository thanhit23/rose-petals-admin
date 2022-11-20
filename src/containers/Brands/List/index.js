import { useEffect } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AuthLayout from '../../../layouts/AuthLayout';
import ListBrandsComponent from '../../../components/Brands/List';
import {
  getBrand as getBrandAction,
  deleteBrand as deleteBrandAction,
} from './actions';
import injectReducer from '../../../utils/injectReducer';
import injectSaga from '../../../utils/injectSaga';
import reducer from './reducers';
import saga from './saga';

function ListBrand({ getBrand, data, meta, deleteBrand }) {
  useEffect(() => getBrand(), []);

  const handleDeleteBrand = id => deleteBrand(id);

  return (
    <AuthLayout title="list_brand">
      <ListBrandsComponent
        handleDeleteBrand={handleDeleteBrand}
        meta={meta}
        data={data}
      />
    </AuthLayout>
  );
}

const mapStateToProps = state => {
  const {
    brand: {
      list: { data, meta },
    },
  } = state;
  return {
    data,
    meta,
  };
};
const mapDispatchToProps = dispatch => ({
  getBrand: bindActionCreators(getBrandAction, dispatch),
  deleteBrand: bindActionCreators(deleteBrandAction, dispatch),
});

const withReducer = injectReducer({ key: 'brand', reducer });

const withSaga = injectSaga({ key: 'listBrand', saga });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withSaga, withReducer, withConnect)(ListBrand);
