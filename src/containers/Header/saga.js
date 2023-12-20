import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { CHANGE_PASSWORD, LOGOUT_REQUEST, STATUS_NO_CONTENT, UPDATE_ACCOUNT } from './constants';
import { logout, updateAccount, changePassword } from './service';
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

function* changePasswordSaga({ payload: { password, callback } }) {
  const res = yield call(changePassword, password);
  const {
    data: { status, message },
  } = res;

  if (status) {
    if (callback instanceof Function) callback();
    toast.success('Change password successfully');
  } else {
    toast.error(message);
  }
}

function* headerSaga() {
  yield takeLatest(UPDATE_ACCOUNT, updateAccountSaga);
  yield takeLatest(CHANGE_PASSWORD, changePasswordSaga);
  yield takeLatest(LOGOUT_REQUEST, handleLogout);
}

export default headerSaga;
