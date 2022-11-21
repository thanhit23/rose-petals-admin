import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../../../layouts/AuthLayout';
import AddBrandComponent from '../../../components/Brands/Add';
import { addBrand as addBrandAction } from './actions';
import injectSaga from '../../../utils/injectSaga';
import saga from './saga';

function AddBrand({ addBrand }) {
  const redirect = useNavigate();

  const callback = () => redirect('/admin/brands');

  const handleCreateBrand = data => addBrand(data, callback);

  return (
    <AuthLayout title="add_brand">
      <AddBrandComponent onSubmit={handleCreateBrand} />
    </AuthLayout>
  );
}

AddBrand.prototype = {
  addBrand: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  addBrand: bindActionCreators(addBrandAction, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);
const withSaga = injectSaga({ key: 'addBrand', saga });

export default compose(withSaga, withConnect)(AddBrand);
