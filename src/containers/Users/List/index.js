import React, { useEffect, useMemo } from 'react';
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

function ListUser({ getUser, data, meta, gotoPage, deleteUser }) {
  const redirect = useNavigate();
  const navigate = () => redirect('/admin/users');
  useEffect(() => getUser(), []);
  const handleGoToPage = page => gotoPage(page);
  const handleDeleteUser = id => deleteUser(id, navigate);
  const element = useMemo(
    () => (
      <ListUserComponent
        meta={meta}
        data={data}
        deleteCategory={handleDeleteUser}
        gotoPage={handleGoToPage}
      />
    ),
    [data],
  );

  return <AuthLayout title="user" children={element} />;
}

ListUser.PropsType = {
  getUser: propsTypes.func,
  data: propsTypes.array,
  meta: propsTypes.object,
  gotoPage: propsTypes.func,
  deleteUser: propsTypes.func,
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
    gotoPage: bindActionCreators(getUsers, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'user', reducer });
const withSaga = injectSaga({ key: 'user', saga });

export default compose(withReducer, withSaga, withConnect)(ListUser);
