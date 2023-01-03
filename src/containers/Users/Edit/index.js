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
  resetUserEdit as resetUserEditAction,
} from './actions';
import injectSaga from '../../../utils/injectSaga';
import saga from './saga';

function EditUser({ updateUser, edit: editUser, getUser, resetUserEdit }) {
  const navigate = useNavigate();

  const callback = () => navigate('/admin/users');

  const handleUpdateUser = (id, data) => updateUser(id, data, callback);

  const { id } = useParams();

  useEffect(() => {
    resetUserEdit();
    getUser(id, callback);
  }, []);

  return (
    <AuthLayout title="edit_user">
      <EditUserComponent users={editUser} submit={handleUpdateUser} />
    </AuthLayout>
  );
}

EditUser.prototype = {
  edit: PropTypes.array,
  getUser: PropTypes.func,
  updateUser: PropTypes.func,
  resetUserEdit: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  updateUser: bindActionCreators(updateUserAction, dispatch),
  getUser: bindActionCreators(getUserAction, dispatch),
  resetUserEdit: bindActionCreators(resetUserEditAction, dispatch),
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
