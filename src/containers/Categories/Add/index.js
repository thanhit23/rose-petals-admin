import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../../../layouts/AuthLayout';
import AddCategoryComponent from '../../../components/Categories/Add';
import { createCategory } from './actions';
import injectSaga from '../../../utils/injectSaga';
import saga from './saga';

function AddCategory({ createNewCategory }) {
  const redirect = useNavigate();

  const callback = () => redirect('/admin/categories');

  const handleCreateCategory = data => createNewCategory(data, callback);

  return <AuthLayout title="add_category" children={<AddCategoryComponent onSubmit={handleCreateCategory} />} />;
}

AddCategory.prototype = {
  createNewCategory: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
  return {
    createNewCategory: bindActionCreators(createCategory, dispatch),
  };
};

const withConnect = connect(null, mapDispatchToProps);
const withSaga = injectSaga({ key: 'addUser', saga });

export default compose(withSaga, withConnect)(AddCategory);
