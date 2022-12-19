import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { pickBy, identity } from 'lodash';

import AuthLayout from '../../../layouts/AuthLayout';
import ListProductComponent from '../../../components/Products/List';
import injectReducer from '../../../utils/injectReducer';
import injectSaga from '../../../utils/injectSaga';
import reducer from './reducers';
import saga from './saga';
import {
  getProduct as getProductAction,
  deleteProduct as deleteProductAction,
} from './actions';
import Url from '../../../helpers/url';

function ListProducts({ getProducts, data, meta, deleteProduct }) {
  const [filter, setFilter] = useState({
    page: 1,
  });

  useEffect(() => {
    const params = Url.getQueryString();

    if (params !== filter) getProducts(params);
  }, [filter]);

  const handleGetProduct = page => {
    const params = Url.getQueryString();

    const queryToString = Url.objectToQueryString({ ...params, page });

    window.history.pushState('', '', `/admin/products?${queryToString}`);

    setFilter({ ...params, page });
  };

  const handleKeywordSearch = name => {
    const params = Url.getQueryString();

    const obj = {
      page: 1,
      ...params,
      name,
    };

    const objectUrl = pickBy(obj, identity);

    const queryToString = Url.objectToQueryString(objectUrl);

    window.history.pushState('', '', `/admin/products?${queryToString}`);

    setFilter(obj);
  };

  const handleDeleteProduct = id => deleteProduct(id);

  return (
    <AuthLayout title="list_product">
      <ListProductComponent
        data={data}
        meta={meta}
        handleGetProduct={handleGetProduct}
        handleDeleteProduct={handleDeleteProduct}
        handleKeywordSearch={handleKeywordSearch}
      />
    </AuthLayout>
  );
}

const mapStateToProps = state => {
  const {
    product: {
      list: { data, meta },
    },
  } = state;
  return {
    meta,
    data,
  };
};

const mapDispatchToProps = dispatch => ({
  getProducts: bindActionCreators(getProductAction, dispatch),
  deleteProduct: bindActionCreators(deleteProductAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'product', saga });
const withReducer = injectReducer({ key: 'product', reducer });

export default compose(withSaga, withReducer, withConnect)(ListProducts);
