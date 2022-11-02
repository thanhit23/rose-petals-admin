import React, { useEffect, useMemo } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import propsTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import { getUsers, getUsersForTable, deleteUsers } from './actions';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducers';
import Breadcrumb from '../../components/Breadcrumb';
import Search from '../../components/Search';
import Button from './Button';
import Table from '../Table';

function ListUser({ getUser, users, meta, gotoPage, deleteUser }) {
  useEffect(() => getUser(), []);
  const handleGoToPage = page => {
    gotoPage(page);
  };
  const handleDeleteUser = id => {
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
      Cell: props => {
        const {
          cell: {
            row: {
              values: { id },
            },
          },
        } = props;
        return (
          <>
            <Link
              className="w-8 h-8 hover:bg-[#EBEFF4] rounded-full"
              to={`/admin/user/edit/${id}`}
            >
              <FontAwesomeIcon className="text-[#7D879C]" icon={faPen} />
            </Link>
            <button
              type="button"
              className="w-8 h-8 hover:bg-[#EBEFF4] rounded-full"
              onClick={() => handleDeleteUser(id)}
            >
              <FontAwesomeIcon className="text-[#7D879C]" icon={faTrash} />
            </button>
          </>
        );
      },
    },
  ]);
  const element = useMemo(
    () =>
      users && (
        <>
          <Breadcrumb title="user" />
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

  return <AuthLayout title="user" children={element} />;
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
    getUser: bindActionCreators(getUsers, dispatch),
    gotoPage: bindActionCreators(getUsersForTable, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'user', reducer });
const withSaga = injectSaga({ key: 'user', saga });

export default compose(withReducer, withSaga, withConnect)(ListUser);
