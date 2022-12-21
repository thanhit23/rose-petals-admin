import { useEffect, useState } from 'react';
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
import { Url } from '../../../helpers';

function ListBrand({ getBrand, data, meta, deleteBrand }) {
  const [filter, setFilter] = useState({
    page: 1,
    name: '',
  });

  useEffect(() => {
    const params = Url.getQueryString();

    if (params !== filter) getBrand(params);
  }, [filter]);

  const handleGetBrands = option => {
    const objectUrl = {
      ...filter,
      ...option,
    };

    const query = Url.objectToQueryString(objectUrl);

    window.history.pushState('', '', `/admin/brands?${query}`);

    setFilter(objectUrl);
  };

  const handleDeleteBrand = id => deleteBrand(id);

  return (
    <AuthLayout title="list_brand">
      <ListBrandsComponent
        meta={meta}
        data={data}
        getBrands={handleGetBrands}
        handleDeleteBrand={handleDeleteBrand}
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
