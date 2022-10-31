import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AuthLayout from '../../layouts/AuthLayout';
import EditUserComponent from '../../components/EditUser';
import { updateUser } from './actions';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';

function EditUser({ updateUserInformation }) {
  const handleUpdateUser = (id, data) => updateUserInformation(id, data);
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
const withReducer = injectReducer({ key: 'addUser', reducer });

export default compose(withSaga, withReducer, withConnect)(EditUser);
