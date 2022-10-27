import React, { useEffect, useMemo } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import propsTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import AuthLayout from '../../layouts/AuthLayout';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import { fetchUsers, fetchUsersForTable, deleteUsers } from './actions';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducers';
import Breadcrumb from '../../components/Breadcrumb';
import Search from '../../components/Search';
import Button from './Button';
import Table from '../Table';
import messages from './messages';

function ListUser({ getUser, users, meta, gotoPage, deleteUser }) {
  useEffect(() => getUser(), []);
  const handleGoToPage = page => {
    gotoPage(page);
  };
  const handleDeleteUser = ({
    cell: {
      row: {
        values: { id },
      },
    },
  }) => {
    deleteUser(id);
  };
  const columns = useMemo(() => [
    {
      Header: 'Id',
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
    {
      Header: 'Action',
      accessor: 'action',
      // eslint-disable-next-line react/no-unstable-nested-components
      Cell: props => (
        <>
          <button
            type="button"
            className="w-8 h-8 hover:bg-[#EBEFF4] rounded-full"
          >
            <FontAwesomeIcon className="text-[#7D879C]" icon={faPen} />
          </button>
          <button
            type="button"
            className="w-8 h-8 hover:bg-[#EBEFF4] rounded-full"
            onClick={() => handleDeleteUser(props)}
          >
            <FontAwesomeIcon className="text-[#7D879C]" icon={faTrash} />
          </button>
        </>
      ),
    },
  ]);
  const element = useMemo(
    () =>
      users && (
        <>
          <Breadcrumb title={<FormattedMessage {...messages.title} />} />
          <div className="flex justify-between">
            <Search message="user" />
            <Button />
          </div>
          <div className="flex flex-col py-4 shadow-lg bg-white rounded mt-4">
            <Table
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
  deleteUser: propsTypes.func,
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
    deleteUser: bindActionCreators(deleteUsers, dispatch),
    getUser: bindActionCreators(fetchUsers, dispatch),
    gotoPage: bindActionCreators(fetchUsersForTable, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'user', reducer });
const withSaga = injectSaga({ key: 'user', saga });

export default compose(withReducer, withSaga, withConnect)(ListUser);
