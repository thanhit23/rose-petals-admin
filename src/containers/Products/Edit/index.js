import { bindActionCreators, compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import AuthLayout from '../../../layouts/AuthLayout';
import EditProductComponent from '../../../components/Products/Edit';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import reducer from '../List/reducers';
import saga from './saga';
import {
  resetProductEdit as resetProductEditAction,
  getDetailProduct as getDetailProductAction,
  updateProduct as updateProductAction,
  getAllBrands as getAllBrandsAction,
  getAllCategories as getAllCategoriesAction,
} from './actions';

function EditProduct({
  resetData,
  getDetailProduct,
  updateProduct,
  getAllBrands,
  getAllCategories,
  categories,
  brands,
  edit: editProduct,
}) {
  const { id: idEdit } = useParams();

  const redirect = useNavigate();

  const callback = () => redirect('/admin/products');

  useEffect(() => {
    resetData();
    getDetailProduct(idEdit, callback);
    getAllBrands();
    getAllCategories();
  }, []);

  const handleUpdateProduct = (id, data) => updateProduct(id, data, callback);

  return (
    <AuthLayout title="edit_product">
      <EditProductComponent
        categories={categories}
        brands={brands}
        submit={handleUpdateProduct}
        product={editProduct}
      />
    </AuthLayout>
  );
}
EditProduct.prototype = {
  data: PropTypes.array,
  categories: PropTypes.array,
  brands: PropTypes.array,
  getUser: PropTypes.func,
  deleteProductEditOld: PropTypes.func,
  updateProduct: PropTypes.func,
  getDetailProduct: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  updateProduct: bindActionCreators(updateProductAction, dispatch),
  getDetailProduct: bindActionCreators(getDetailProductAction, dispatch),
  getAllBrands: bindActionCreators(getAllBrandsAction, dispatch),
  getAllCategories: bindActionCreators(getAllCategoriesAction, dispatch),
  resetData: bindActionCreators(resetProductEditAction, dispatch),
});

const mapStateToProps = state => {
  const {
    product: { categories, brands, edit },
  } = state;
  return { edit, categories, brands };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: 'editProduct', saga });
const withReducer = injectReducer({ key: 'product', reducer });

export default compose(withReducer, withSaga, withConnect)(EditProduct);
