import React, { useEffect, useMemo } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import propsTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import { getUsers, getUsersForTable, deleteUsers } from './actions';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducers';
import ButtonRedirect from '../../components/ButtonRedirect';
import MainWithTable from '../../components/MainWithTable';

function ListUser({ getUser, users, meta, gotoPage, deleteUser }) {
  const navigate = useNavigate();
  const callback = ({ status }) => status && navigate('/admin/users');
  useEffect(() => getUser(), []);
  const handleGoToPage = page => gotoPage(page);
  const handleDeleteUser = id => deleteUser(id, callback);
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
        <MainWithTable
          title="user"
          button={
            <ButtonRedirect to="/admin/user" title="add_user" icon={faPlus} />
          }
          columns={columns}
          data={users}
          meta={meta}
          handleGoToPage={handleGoToPage}
        />
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
