import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AuthLayout from '../../layouts/AuthLayout';
import AddUserComponent from '../../components/AddUser';
import { createUser } from './actions';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';

function AddUser({ createNewUser }) {
  const handleCreateUser = data => createNewUser({ ...data, role: 'user' });

  return (
    <AuthLayout
      title="add_user"
      children={<AddUserComponent onSubmitAddUser={handleCreateUser} />}
    />
  );
}

AddUser.prototype = {
  createNewUser: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
  return {
    createNewUser: bindActionCreators(createUser, dispatch),
  };
};

const withConnect = connect(null, mapDispatchToProps);
const withSaga = injectSaga({ key: 'addUser', saga });

export default compose(withSaga, withConnect)(AddUser);
