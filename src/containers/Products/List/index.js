import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { Url } from '../../../helpers';
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

function ListProducts({ data, meta, getProducts, deleteProduct }) {
  const [filter, setFilter] = useState({
    page: 1,
    name: '',
    forkUpdate: null,
  });

  useEffect(() => {
    const params = Url.getQueryString();

    if (params !== filter) getProducts(params);
  }, [filter]);

  const handleGetProducts = option => {
    const objectUrl = {
      ...filter,
      ...option,
    };

    const query = Url.objectToQueryString(objectUrl);

    window.history.pushState('', '', `/admin/products?${query}`);

    setFilter(objectUrl);
  };

  const callback = () => setFilter({ ...filter, forkUpdate: '' });

  const handleDeleteProduct = id => deleteProduct(id, callback);

  return (
    <AuthLayout title="list_product">
      <ListProductComponent
        data={data}
        meta={meta}
        getProduct={handleGetProducts}
        handleDeleteProduct={handleDeleteProduct}
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
