import { call, put, takeLatest } from 'redux-saga/effects';
import { CHECK_TOKEN_REQUEST } from './constants';
import { isMe, setHeader } from './service';
import { setAuth, checkTokenSuccess, checkTokenFailed } from './actions';

function* sendReqToken({ payload: { token } }) {
  yield call(setHeader, token);
  const res = yield call(isMe);
  const {
    data: { data, status },
  } = res;
  if (status) {
    yield put(setAuth(data));
    yield put(checkTokenSuccess());
  } else {
    yield put(checkTokenFailed());
  }
}

function* loginSaga() {
  yield takeLatest(CHECK_TOKEN_REQUEST, sendReqToken);
}

export default loginSaga;
