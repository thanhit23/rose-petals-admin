import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '../../../layouts/AuthLayout';
import AddProductComponent from '../../../components/Products/Add';
import {
  addProduct as addProductAction,
  getAllCategories as getCategoriesAction,
  getAllBrands as getAllBrandsAction,
} from './actions';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import saga from './saga';
import reducer from '../List/reducers';

function AddProduct({
  addProduct,
  getCategories,
  getBrands,
  categories,
  brands,
}) {
  useEffect(() => {
    getCategories();
    getBrands();
  }, []);

  const navigate = useNavigate();

  const callback = () => navigate('/admin/products');

  const onSubmit = data => addProduct(data, callback);

  return (
    <AuthLayout title="add_product">
      <AddProductComponent
        listBrand={brands}
        listCategory={categories}
        onSubmit={onSubmit}
      />
    </AuthLayout>
  );
}

AddProduct.prototype = {
  addProduct: PropTypes.func,
};

const mapStateToProps = state => {
  const {
    product: {
      add: { categories, brands },
    },
  } = state;
  return {
    categories,
    brands,
  };
};

const mapDispatchToProps = dispatch => ({
  addProduct: bindActionCreators(addProductAction, dispatch),
  getCategories: bindActionCreators(getCategoriesAction, dispatch),
  getBrands: bindActionCreators(getAllBrandsAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'addProduct', saga });
const withReducer = injectReducer({ key: 'product', reducer });

export default compose(withSaga, withReducer, withConnect)(AddProduct);
