import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { LOGOUT_REQUEST, STATUS_NO_CONTENT, UPDATE_ACCOUNT } from './constants';
import { logout, updateAccount } from './service';
import { loggedOut } from './actions';

function* handleLogout() {
  const refreshToken = localStorage.getItem('refreshToken');
  const res = yield call(logout, { refreshToken });
  const { status } = res;
  if (status === STATUS_NO_CONTENT) {
    yield put(loggedOut());
  }
}

function* updateAccountSaga({ payload: { id, callback, ...rest } }) {
  const res = yield call(updateAccount, rest, id);
  const {
    data: { status, message },
  } = res;

  if (status) {
    if (callback instanceof Function) callback();
    toast.success('Account updated successfully');
  } else {
    toast.error(message);
  }
}

function* headerSaga() {
  yield takeLatest(UPDATE_ACCOUNT, updateAccountSaga);
  yield takeLatest(LOGOUT_REQUEST, handleLogout);
}

export default headerSaga;
