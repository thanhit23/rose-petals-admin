import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../../layouts/AuthLayout';
import AddCategoryComponent from '../../components/AddCategory';
import { createCategory } from './actions';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';

function AddCategory({ createNewCategory }) {
  const navigate = useNavigate();
  const handleCreateCategory = data => createNewCategory(data, navigate);

  return (
    <AuthLayout
      title="add_user"
      children={<AddCategoryComponent onSubmit={handleCreateCategory} />}
    />
  );
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
