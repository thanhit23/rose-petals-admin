import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { LOGIN_REQUEST, STATUS_SUCCESS } from './constants';
import { login, setToken } from './service';
import { fetchLoginSuccess, fetchLoginError } from './actions';

function* fetchLogin({ payload: { email, password } }) {
  const res = yield call(login, { email, password });
  const { data, status, message } = res;
  const {
    data: {
      tokens: { access },
      user,
    },
  } = data;
  if (status === STATUS_SUCCESS) {
    const token = sessionStorage.getItem('token');
    yield call(setToken, token);
    yield put(fetchLoginSuccess(access, user));
    toast.success('Login Successfully');
  } else {
    yield put(fetchLoginError(data));
    toast.error(message);
  }
}

function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, fetchLogin);
}

export default loginSaga;
