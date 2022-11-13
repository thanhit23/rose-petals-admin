import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import AuthLayout from '../../../layouts/AuthLayout';
import AddProductComponent from '../../../components/Products/Add';
import { addProduct as addProductAction } from './actions';
import { getCategories as getCategoriesAction } from '../../Categories/List/actions';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import saga from './saga';
import sagaCategory from '../../Categories/List/saga';
import reducerCategory from '../../Categories/List/reducers';

function AddProduct({ addProduct, getCategories, list }) {
  useEffect(() => getCategories(), []);

  const onSubmit = data => addProduct(data);

  return (
    <AuthLayout
      title="add_product"
      children={<AddProductComponent dataCategory={list} onSubmit={onSubmit} />}
    />
  );
}

AddProduct.prototype = {
  addProduct: PropTypes.func,
};

const mapStateToProps = state => {
  const {
    category: { list },
  } = state;
  return {
    list,
  };
};

const mapDispatchToProps = dispatch => ({
  addProduct: bindActionCreators(addProductAction, dispatch),
  getCategories: bindActionCreators(getCategoriesAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'addProduct', saga });
const withSagaCategory = injectSaga({ key: 'category', saga: sagaCategory });
const withReducerCategory = injectReducer({
  key: 'category',
  reducer: reducerCategory,
});

export default compose(
  withSaga,
  withReducerCategory,
  withSagaCategory,
  withConnect,
)(AddProduct);
