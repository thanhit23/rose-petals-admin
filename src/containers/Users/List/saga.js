import { call, put, takeEvery } from 'redux-saga/effects';
import { isEmpty } from 'lodash';

import { FETCH_USERS_REQUEST, DELETE_USERS_REQUEST } from './constants';
import { getUsers, deleteUser } from './service';
import { getObjectAcceptArrayKey } from '../../../helpers';
import {
  getUsersSuccess,
  getUsersListFailed,
  deleteUserSuccess,
} from './actions';

function* getListUsers({ payload: { options } }) {
  let option = { page: 1 };

  const ruleOption = ['role', 'name', 'page'];

  if (!isEmpty(options)) {
    option = getObjectAcceptArrayKey(ruleOption, options);
  }

  const res = yield call(getUsers, option);

  const { status, data } = res;

  if (status) {
    yield put(getUsersSuccess(data));
  } else {
    const { message } = data;
    yield put(getUsersListFailed(message));
  }
}

function* apiDeleteUser({ payload: { id, callback } }) {
  const res = yield call(deleteUser, id);

  const { status, data } = res;

  if (status) {
    yield put(deleteUserSuccess());
    yield callback();
  } else {
    const { message } = data;
    yield put(getUsersListFailed(message));
  }
}

function* userSaga() {
  yield takeEvery(FETCH_USERS_REQUEST, getListUsers);
  yield takeEvery(DELETE_USERS_REQUEST, apiDeleteUser);
}

export default userSaga;
