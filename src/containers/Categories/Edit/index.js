import { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../../../layouts/AuthLayout';
import EditCategoryComponent from '../../../components/Categories/Edit';
import { updateCategory as updateCategoryAction, getCategory as getCategoryAction, resetCategoryEdit } from './actions';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import saga from './saga';
import reducer from '../List/reducers';

function EditCategory({ updateCategory, edit: editCategory, getCategory, resetData }) {
  const { id: idEdit } = useParams();

  useEffect(() => {
    resetData();
    getCategory(idEdit);
  }, []);

  const redirect = useNavigate();

  const callback = () => redirect('/admin/categories');

  const handleUpdateUser = (id, data) => updateCategory(id, data, callback);

  const renderEditCategory = editCategory && <EditCategoryComponent data={editCategory} submit={handleUpdateUser} />;

  return <AuthLayout title="edit_category" children={renderEditCategory} />;
}

EditCategory.prototype = {
  edit: PropTypes.array,
  resetData: PropTypes.func,
  getCategory: PropTypes.func,
  updateCategory: PropTypes.func,
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
  resetData: bindActionCreators(resetCategoryEdit, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'editCategory', saga });
const withReducer = injectReducer({ key: 'category', reducer });

export default compose(withReducer, withSaga, withConnect)(EditCategory);
