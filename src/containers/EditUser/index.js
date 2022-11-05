import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../../layouts/AuthLayout';
import EditUserComponent from '../../components/EditUser';
import { updateUser } from './actions';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';

function EditUser({ updateUserInformation }) {
  const navigate = useNavigate();
  const handleUpdateUser = (id, data) =>
    updateUserInformation(id, data, navigate);
  return (
    <AuthLayout
      title="edit_user"
      children={<EditUserComponent onSubmitForUpdateUser={handleUpdateUser} />}
    />
  );
}

EditUser.prototype = {
  updateUserInformation: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserInformation: bindActionCreators(updateUser, dispatch),
  };
};

const withConnect = connect(null, mapDispatchToProps);
const withSaga = injectSaga({ key: 'editUser', saga });

export default compose(withSaga, withConnect)(EditUser);
