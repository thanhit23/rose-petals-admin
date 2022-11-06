import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../../../layouts/AuthLayout';
import AddUserComponent from '../../../components/Users/Add';
import { createUser } from './actions';
import injectSaga from '../../../utils/injectSaga';
import saga from './saga';

function AddUser({ createNewUser }) {
  const redirect = useNavigate();
  const navigate = () => {
    redirect('/admin/users');
  };
  const handleCreateUser = data =>
    createNewUser({ ...data, role: 'user' }, navigate);

  return (
    <AuthLayout
      title="add_user"
      children={<AddUserComponent onSubmit={handleCreateUser} />}
    />
  );
}

AddUser.prototype = {
  createNewUser: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  createNewUser: bindActionCreators(createUser, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);
const withSaga = injectSaga({ key: 'addUser', saga });

export default compose(withSaga, withConnect)(AddUser);
