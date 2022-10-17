import { call, takeLatest, put, takeEvery } from 'redux-saga/effects';

import { FETCH_USERS_REQUEST, FETCH_USERS_TABLE_REQUEST } from './constants';
import { getUsers, getUsersByPage } from './service';
import {
  listUsers,
  fetchUsersSuccess,
  listUsersForTable,
  fetchUsersForTableSuccess,
} from './actions';

function* fetchUsers() {
  const res = yield call(getUsers);
  const { status, data } = res;
  if (status) {
    yield put(listUsers(data));
    yield put(fetchUsersSuccess());
  }
}

function* fetchUsersForTable({ payload: { index } }) {
  const res = yield call(getUsersByPage, index);
  const { status, data } = res;
  if (status) {
    yield put(listUsersForTable(data));
    yield put(fetchUsersForTableSuccess());
  }
}

function* userSaga() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);
  yield takeLatest(FETCH_USERS_TABLE_REQUEST, fetchUsersForTable);
}

export default userSaga;
