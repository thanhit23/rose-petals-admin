import { call, put, takeLatest } from 'redux-saga/effects';

import { LOGOUT_REQUEST, STATUS_NO_CONTENT } from './constants';
import { logout } from './service';
import { loggedOut } from './actions';

function* handleLogout() {
  const refreshToken = sessionStorage.getItem('refreshToken');
  const res = yield call(logout, { refreshToken });
  const { status } = res;
  if (status === STATUS_NO_CONTENT) {
    yield put(loggedOut());
  }
}

function* headerSaga() {
  yield takeLatest(LOGOUT_REQUEST, handleLogout);
}

export default headerSaga;
