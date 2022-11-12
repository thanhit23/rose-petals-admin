import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useEffect } from 'react';
import AuthLayout from '../../../layouts/AuthLayout';
import EditUserComponent from '../../../components/Users/Edit';
import {
  updateUser as updateUserAction,
  getUser as getUserAction,
  deleteUserEditOld as deleteUserEditOldAction,
} from './actions';
import injectSaga from '../../../utils/injectSaga';
import saga from './saga';

function EditUser({ updateUser, edit: editUser, getUser, deleteUserEditOld }) {
  const navigate = useNavigate();

  const callback = () => navigate('/admin/users');

  const handleUpdateUser = (id, data) => updateUser(id, data, callback);

  const { id } = useParams();

  useEffect(() => {
    deleteUserEditOld();
    getUser(id);
  }, []);

  const renderEditUser = Object.keys(editUser).length && (
    <EditUserComponent
      users={editUser}
      onSubmitForUpdateUser={handleUpdateUser}
    />
  );

  return <AuthLayout title="edit_user" children={renderEditUser} />;
}

EditUser.prototype = {
  edit: PropTypes.array,
  getUser: PropTypes.func,
  updateUserInformation: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  updateUser: bindActionCreators(updateUserAction, dispatch),
  getUser: bindActionCreators(getUserAction, dispatch),
  deleteUserEditOld: bindActionCreators(deleteUserEditOldAction, dispatch),
});

const mapStateToProps = state => {
  const {
    user: { edit },
  } = state;
  return {
    edit,
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'editUser', saga });

export default compose(withSaga, withConnect)(EditUser);
