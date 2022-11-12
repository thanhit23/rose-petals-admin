import { call, put, takeEvery } from 'redux-saga/effects';
import { UPDATE_USER_REQUEST, GET_USER_REQUEST } from './constants';
import { updateUser, getUsers } from './service';
import {
  updateUserSuccessfully,
  updateUserFailed,
  getUserSuccessfully,
  getUserFailed,
} from './actions';

function* updateUserInformation({ payload: { id, data, callback } }) {
  const res = yield call(updateUser, id, data);
  const {
    data: { status },
  } = res;
  if (status) {
    yield put(updateUserSuccessfully());
  } else {
    yield put(updateUserFailed());
  }
  if (callback instanceof Function) callback({ status });
}

function* getListUsers({ payload: { id } }) {
  const res = yield call(getUsers, id);
  console.log(res, 'res');
  const { status, data } = res;
  if (status) {
    yield put(getUserSuccessfully(data));
  } else {
    const { message } = data;
    yield put(getUserFailed(message));
  }
}

function* editUser() {
  yield takeEvery(UPDATE_USER_REQUEST, updateUserInformation);
  yield takeEvery(GET_USER_REQUEST, getListUsers);
}

export default editUser;
