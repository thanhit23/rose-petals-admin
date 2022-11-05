import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../../layouts/AuthLayout';
import EditCategoryComponent from '../../components/EditCategory';
import { updateCategory } from './actions';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';

function EditCategory({ updateCategoryInformation }) {
  const navigate = useNavigate();
  const handleUpdateUser = (id, data) => {
    updateCategoryInformation(id, data, navigate);
  };
  return (
    <AuthLayout
      title="edit_category"
      children={<EditCategoryComponent onSubmit={handleUpdateUser} />}
    />
  );
}

EditCategory.prototype = {
  updateCategoryInformation: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
  return {
    updateCategoryInformation: bindActionCreators(updateCategory, dispatch),
  };
};

const withConnect = connect(null, mapDispatchToProps);
const withSaga = injectSaga({ key: 'editCategory', saga });

export default compose(withSaga, withConnect)(EditCategory);
