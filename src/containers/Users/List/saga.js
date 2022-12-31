import { call, put, takeEvery } from 'redux-saga/effects';

import {
  getUsers as getUsersService,
  deleteUser as deleteUserService,
} from './service';
import {
  getUsersSuccess,
  getUsersListFailed,
  deleteUserSuccess,
} from './actions';
import { getObjectAcceptArrayKey } from '../../../helpers';
import { GET_USERS_REQUEST_TABLE, DELETE_USERS_REQUEST } from './constants';

function* getUsers({ payload: { options } }) {
  const queryAccept = ['role', 'name', 'page'];

  const option = getObjectAcceptArrayKey(queryAccept, { page: 1, ...options });

  const res = yield call(getUsersService, option);

  const { status, data } = res;

  if (status) {
    yield put(getUsersSuccess(data));
  } else {
    const { message } = data;
    yield put(getUsersListFailed(message));
  }
}

function* deleteUser({ payload: { id, callback } }) {
  const res = yield call(deleteUserService, id);

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
  yield takeEvery(GET_USERS_REQUEST_TABLE, getUsers);
  yield takeEvery(DELETE_USERS_REQUEST, deleteUser);
}

export default userSaga;
