import { useEffect, useMemo } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import propsTypes from 'prop-types';

import AuthLayout from '../../layouts/AuthLayout';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import { fetchUsers, fetchUsersForTable } from './actions';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducers';
import Breadcrumb from '../../components/Breadcrumb';
import Search from '../../components/Search';
import Button from './Button';
import PaginationTable from '../Pagination';

function ListUser({ getUser, users, meta, gotoPage }) {
  useEffect(() => getUser(), []);
  const handleGoToPage = page => {
    gotoPage(page);
  };
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
  const element = useMemo(
    () =>
      users && (
        <>
          <Breadcrumb title="User" />
          <div className="flex justify-between">
            <Search message="user" />
            <Button />
          </div>
          <div className="flex flex-col py-4 shadow-lg bg-white rounded mt-4">
            <PaginationTable
              goToPage={handleGoToPage}
              metaData={meta}
              col={columns}
              dataUser={users}
            />
          </div>
        </>
      ),
    [users],
  );

  return <AuthLayout title="User" children={element} />;
}

ListUser.PropsType = {
  getUser: propsTypes.func,
  users: propsTypes.array,
  meta: propsTypes.object,
  gotoPage: propsTypes.func,
};

const mapStateToProps = state => {
  const {
    user: { users, meta },
  } = state;
  return {
    meta,
    users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: bindActionCreators(fetchUsers, dispatch),
    gotoPage: bindActionCreators(fetchUsersForTable, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'user', reducer });
const withSaga = injectSaga({ key: 'user', saga });

export default compose(withReducer, withSaga, withConnect)(ListUser);
