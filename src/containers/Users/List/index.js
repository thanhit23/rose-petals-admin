import React, { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import propsTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '../../../layouts/AuthLayout';
import injectSaga from '../../../utils/injectSaga';
import saga from './saga';
import { getUsers, deleteUsers } from './actions';
import injectReducer from '../../../utils/injectReducer';
import reducer from './reducers';
import ListUserComponent from '../../../components/Users/List';

function ListUser({ getUser, data, meta, deleteUser }) {
  useEffect(() => getUser('page=1'), []);

  const redirect = useNavigate();

  const callback = () => redirect('/admin/users');

  const handleGoToPage = (page = 1) => getUser(`page=${page}`);

  const handleKeywordSearch = keyword => getUser(`q=${keyword}`);

  const handleDeleteUser = id => deleteUser(id, callback);

  return (
    <AuthLayout title="user">
      <ListUserComponent
        meta={meta}
        data={data}
        handleDeleteUser={handleDeleteUser}
        gotoPage={handleGoToPage}
        handleKeywordSearch={handleKeywordSearch}
      />
    </AuthLayout>
  );
}

ListUser.PropsType = {
  getUser: propsTypes.func,
  data: propsTypes.array,
  meta: propsTypes.object,
  gotoPage: propsTypes.func,
  deleteUser: propsTypes.func,
  searchUsers: propsTypes.func,
};

const mapStateToProps = state => {
  const {
    user: {
      list: { data, meta },
    },
  } = state;
  return {
    meta,
    data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: bindActionCreators(deleteUsers, dispatch),
    getUser: bindActionCreators(getUsers, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'user', reducer });
const withSaga = injectSaga({ key: 'user', saga });

export default compose(withReducer, withSaga, withConnect)(ListUser);
