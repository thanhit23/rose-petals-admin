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
import injectReducer from '../../../utils/injectReducer';
import reducer from '../List/reducers';

function EditUser({ updateUser, edit: editUser, getUser, resetUserEdit }) {
  const navigate = useNavigate();

  const { id } = useParams();

  const callback = () => navigate('/admin/users');

  const handleUpdateUser = data => updateUser(id, data, callback);

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
const withReducer = injectReducer({ key: 'user', reducer });
const withSaga = injectSaga({ key: 'editUser', saga });

export default compose(withSaga, withReducer, withConnect)(EditUser);
