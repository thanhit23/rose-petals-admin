import { call, takeLatest, put } from 'redux-saga/effects';

import { FETCH_USERS_REQUEST } from './constants';
import { getUsers } from './service';
import { listUsers, fetchUsersSuccess } from './actions';

function* fetchUsers() {
  const res = yield call(getUsers);
  const { status, data } = res;
  if (status) {
    yield put(listUsers(data));
    yield put(fetchUsersSuccess());
  }
}

function* userSaga() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
}

export default userSaga;
