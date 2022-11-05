import { call, takeLatest, put, takeEvery } from 'redux-saga/effects';

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_TABLE_REQUEST,
  DELETE_USERS_REQUEST,
} from './constants';
import { getUsers, deleteUser } from './service';
import {
  getUsersSuccess,
  getUsersListFailed,
  deleteUserSuccess,
} from './actions';

function* getListUsers() {
  const res = yield call(getUsers);
  const { status, data } = res;
  if (status) {
    yield put(getUsersSuccess(data));
  } else {
    const { message } = data;
    yield put(getUsersListFailed(message));
  }
}

function* fetchUsersForTable({ payload: { index } }) {
  const res = yield call(getUsers, index);
  const { status, data } = res;
  if (status) {
    yield put(getUsersSuccess(data));
  } else {
    const { message } = data;
    yield put(getUsersListFailed(message));
  }
}

function* apiDeleteUser({ payload: { id }, navigate }) {
  const res = yield call(deleteUser, id);
  const { status, data } = res;
  if (status) {
    yield put(deleteUserSuccess());
    yield navigate();
  } else {
    const { message } = data;
    yield put(getUsersListFailed(message));
  }
}

function* userSaga() {
  yield takeEvery(FETCH_USERS_REQUEST, getListUsers);
  yield takeEvery(DELETE_USERS_REQUEST, apiDeleteUser);
  yield takeLatest(FETCH_USERS_TABLE_REQUEST, fetchUsersForTable);
}

export default userSaga;
