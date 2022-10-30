import { call, put, takeEvery } from 'redux-saga/effects';

import { LOGIN_REQUEST, STATUS_SUCCESS } from './constants';
import { login, setToken } from './service';
import { logged, loginFailed } from './actions';

function* fetchLogin({ payload: { email, password } }) {
  const res = yield call(login, { email, password });
  const { data, status } = res;
  const {
    data: {
      tokens: { access, refresh },
      user,
    },
  } = data;
  if (status === STATUS_SUCCESS) {
    const token = sessionStorage.getItem('token');
    yield call(setToken, token);
    yield put(logged(access, refresh, user));
  } else {
    yield put(loginFailed(data));
  }
}

function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, fetchLogin);
}

export default loginSaga;
