import { call, takeLatest, put, takeEvery } from 'redux-saga/effects';

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_TABLE_REQUEST,
  DELETE_USERS_REQUEST,
} from './constants';
import { getUsers, getUsersByPage } from './service';
import { getListUsers, getListUsersFailed } from './actions';

function* fetchUsers() {
  const res = yield call(getUsers);
  const { status, data } = res;
  if (status) {
    yield put(getListUsers(data));
  } else {
    const { message } = data;
    yield put(getListUsersFailed(message));
  }
}

function* fetchUsersForTable({ payload: { index } }) {
  const res = yield call(getUsersByPage, index);
  const { status, data } = res;
  if (status) {
    yield put(getListUsers(data));
  } else {
    const { message } = data;
    yield put(getListUsersFailed(message));
  }
}

function* deleteUser({ payload: { id } }) {
  yield console.log(id, 'a--------a');
}

function* userSaga() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);
  yield takeEvery(DELETE_USERS_REQUEST, deleteUser);
  yield takeLatest(FETCH_USERS_TABLE_REQUEST, fetchUsersForTable);
}

export default userSaga;
