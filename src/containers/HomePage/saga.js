import { toast } from 'react-toastify';
import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_ANALYTICS } from './constants';
import { getAnalyticsSuccess } from './actions';
import { getAnalytics as getAnalyticsService } from './service';

function* getAnalytics({ payload: { token } }) {
  const res = yield call(getAnalyticsService, { token });
  const {
    data: { status, data, message },
  } = res;

  if (status) {
    yield put(getAnalyticsSuccess(data));
  } else {
    toast.error(message);
  }
}

function* homeSaga() {
  yield takeLatest(GET_ANALYTICS, getAnalytics);
}

export default homeSaga;
