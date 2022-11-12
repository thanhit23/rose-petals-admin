import { call, put, takeEvery } from 'redux-saga/effects';

import { FETCH_USERS_REQUEST, DELETE_USERS_REQUEST } from './constants';
import { getUsers, deleteUser } from './service';
import {
  getUsersSuccess,
  getUsersListFailed,
  deleteUserSuccess,
} from './actions';

function* getListUsers({ payload: { page } }) {
  const res = yield call(getUsers, page);
  const { status, data } = res;
  console.log(res, 'res');
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
}

export default userSaga;
