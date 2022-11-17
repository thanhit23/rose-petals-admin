import { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../../../layouts/AuthLayout';
import EditCategoryComponent from '../../../components/Categories/Edit';

function EditBrand({ updateCategory, edit: category, getCategory }) {
  const { id: idEdit } = useParams();

  useEffect(() => getCategory(idEdit), []);

  const redirect = useNavigate();

  const callback = () => redirect('/admin/categories');

  const handleUpdateUser = (id, data) => updateCategory(id, data, callback);

  const renderEditCategory = category && (
    <EditCategoryComponent data={category} onSubmit={handleUpdateUser} />
  );

  return <AuthLayout title="edit_category" children={renderEditCategory} />;
}

EditBrand.prototype = {
  edit: PropTypes.array,
  getCategory: PropTypes.func,
  updateCategoryInformation: PropTypes.func,
};

const mapStateToProps = state => {
  const {
    brand: { edit },
  } = state;
  return {
    edit,
  };
};

const mapDispatchToProps = () => ({});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(EditBrand);
