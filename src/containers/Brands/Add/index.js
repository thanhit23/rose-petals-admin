import { compose } from 'redux';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../../../layouts/AuthLayout';
import AddBrandComponent from '../../../components/Brands/Add';

function AddBrand({ createNewBrand }) {
  const redirect = useNavigate();

  const callback = () => {
    redirect('/admin/brands');
  };

  const handleCreateBrand = data => createNewBrand(data, callback);

  return (
    <AuthLayout
      title="add_brand"
      children={<AddBrandComponent onSubmit={handleCreateBrand} />}
    />
  );
}

AddBrand.prototype = {
  createNewBrand: PropTypes.func,
};

const mapDispatchToProps = () => {
  return {};
};

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(AddBrand);
