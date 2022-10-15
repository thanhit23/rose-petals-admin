import { useEffect, useMemo } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import HeaderList from '../../components/HeaderList';
import Table from './Table';
import AuthLayout from '../../layouts/AuthLayout';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import { fetchUsers } from './actions';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducers';

function UserPage({ getUser, users }) {
  useEffect(() => getUser(), []);
  const columns = useMemo(() => [
    {
      Header: 'STT',
      accessor: 'id',
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Phone Number',
      accessor: 'phoneNumber',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Gender',
      accessor: 'gender',
    },
  ]);
  const element = users && (
    <>
      <HeaderList title="user" messages="user" btnAdd="Add User" />
      <Table columns={columns} data={users} />
    </>
  );

  return <AuthLayout title="User" children={element} />;
}

const mapStateToProps = state => {
  const {
    user: { users },
  } = state;
  return {
    users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: bindActionCreators(fetchUsers, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'user', reducer });
const withSaga = injectSaga({ key: 'user', saga });

export default compose(withReducer, withSaga, withConnect)(UserPage);
