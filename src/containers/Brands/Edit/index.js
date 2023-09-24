import { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../../../layouts/AuthLayout';
import EditBrandComponent from '../../../components/Brands/Edit';
import {
  getDetailBrand as getDetailBrandAction,
  resetBrandEdit as resetBrandEditAction,
  updateBrand as updateBrandAction,
} from './actions';
import injectReducer from '../../../utils/injectReducer';
import injectSaga from '../../../utils/injectSaga';
import reducer from '../List/reducers';
import saga from './saga';

function EditBrand({ updateBrand, edit: editBrand, getDetailBrand, resetData }) {
  const { id: idEdit } = useParams();

  const redirect = useNavigate();

  const callback = () => redirect('/admin/brands');

  useEffect(() => {
    resetData();
    getDetailBrand(idEdit, callback);
  }, []);

  const onSubmit = (id, data, file) => updateBrand(id, data, file, callback);

  return (
    <AuthLayout title="edit_brand">
      <EditBrandComponent data={editBrand} onSubmit={onSubmit} />
    </AuthLayout>
  );
}

EditBrand.prototype = {
  edit: PropTypes.array,
  resetData: PropTypes.func,
  updateBrand: PropTypes.func,
  getDetailBrand: PropTypes.func,
};

const mapStateToProps = state => {
  const {
    brand: { edit },
  } = state;
  return {
    edit,
  };
};

const mapDispatchToProps = dispatch => ({
  updateBrand: bindActionCreators(updateBrandAction, dispatch),
  getDetailBrand: bindActionCreators(getDetailBrandAction, dispatch),
  resetData: bindActionCreators(resetBrandEditAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'brand', reducer });
const withSaga = injectSaga({ key: 'editBrand', saga });

export default compose(withSaga, withReducer, withConnect)(EditBrand);
