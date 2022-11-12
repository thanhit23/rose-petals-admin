import PropTypes from 'prop-types';

import AuthLayout from '../../../layouts/AuthLayout';
import AddProductComponent from '../../../components/Products/Add';

function AddProduct() {
  return <AuthLayout title="add_user" children={<AddProductComponent />} />;
}

AddProduct.prototype = {
  createNewUser: PropTypes.func,
};

export default AddProduct;
