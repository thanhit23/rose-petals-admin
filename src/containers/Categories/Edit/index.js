import { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../../../layouts/AuthLayout';
import EditBrandComponent from '../../../components/Brands/Edit';
import {
  updateCategory as updateCategoryAction,
  getCategory as getCategoryAction,
} from './actions';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import saga from './saga';
import reducer from '../List/reducers';

function EditCategory({ updateCategory, edit: category, getCategory }) {
  const { id: idEdit } = useParams();

  useEffect(() => getCategory(idEdit), []);

  const redirect = useNavigate();

  const callback = () => redirect('/admin/categories');

  const handleUpdateUser = (id, data) => updateCategory(id, data, callback);

  const renderEditCategory = category && (
    <EditBrandComponent data={category} onSubmit={handleUpdateUser} />
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
const withReducer = injectReducer({ key: 'category', reducer });

export default compose(withReducer, withSaga, withConnect)(EditCategory);
