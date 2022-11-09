import { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../../../layouts/AuthLayout';
import EditCategoryComponent from '../../../components/Categories/Edit';
import {
  updateCategory as updateCategoryAction,
  getCategory as getCategoryAction,
} from './actions';
import injectSaga from '../../../utils/injectSaga';
import saga from './saga';

function EditCategory({ updateCategory, edit: category, getCategory }) {
  const redirect = useNavigate();
  const navigate = () => redirect('/admin/categories');
  const handleUpdateUser = (id, data) => updateCategory(id, data, navigate);
  const { id } = useParams();
  useEffect(() => getCategory(id), []);
  const renderEditCategory = category && (
    <EditCategoryComponent data={category} onSubmit={handleUpdateUser} />
  );

  return <AuthLayout title="edit_category" children={renderEditCategory} />;
}

EditCategory.prototype = {
  edit: PropTypes.array,
  getCategory: PropTypes.func,
  updateCategoryInformation: PropTypes.func,
};

const mapStateToProps = state => {
  const {
    category: { edit },
  } = state;
  return {
    edit,
  };
};

const mapDispatchToProps = dispatch => ({
  updateCategory: bindActionCreators(updateCategoryAction, dispatch),
  getCategory: bindActionCreators(getCategoryAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'editCategory', saga });

export default compose(withSaga, withConnect)(EditCategory);
