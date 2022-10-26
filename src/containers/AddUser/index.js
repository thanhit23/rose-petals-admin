import AuthLayout from '../../layouts/AuthLayout';
import AddUserComponent from '../../components/AddUser';

function AddUser() {
  return <AuthLayout title="Add User" children={<AddUserComponent />} />;
}

export default AddUser;
