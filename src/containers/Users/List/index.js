import React, { useEffect, useState } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import propsTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { getUsers, deleteUsers } from './actions';
import AuthLayout from '../../../layouts/AuthLayout';
import injectSaga from '../../../utils/injectSaga';
import saga from './saga';
import injectReducer from '../../../utils/injectReducer';
import reducer from './reducers';
import ListUserComponent from '../../../components/Users/List';
import Url from '../../../helpers/url';

function ListUser({ getUser, data, meta, deleteUser }) {
  const navigate = useNavigate();

  const [filter, setFilter] = useState({
    page: 1,
    name: '',
  });

  const callback = () => navigate('/admin/users');

  useEffect(() => {
    const params = Url.getQueryString();

    if (params !== filter) getUser(params);
  }, [filter]);

  const handleGetUsers = option => {
    const objectUrl = {
      ...filter,
      ...option,
    };

    const query = Url.objectToQueryString(objectUrl);

    window.history.pushState('', '', `/admin/users?${query}`);

    setFilter(objectUrl);
  };

  const handleDeleteUser = id => deleteUser(id, callback);

  return (
    <AuthLayout title="user">
      <ListUserComponent
        meta={meta}
        data={data}
        handleDeleteUser={handleDeleteUser}
        handleGetUsers={handleGetUsers}
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
