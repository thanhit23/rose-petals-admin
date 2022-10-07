import { fork, take, call, put, delay, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { getList, deleteProduct } from '../../apis';
import { FETCH_PRODUCT_REQ, PRODUCT_DELETE, STATUS_SUCCESS } from './constants';
import {
  fetchListProductSuccess,
  fetchListProductError,
  deleteProductSuccess,
  deleteProductFailed,
} from './actions';

function* watchFetchListProductAction() {
  while (true) {
    yield take(FETCH_PRODUCT_REQ);
    const res = yield call(getList);
    const { data, status } = res;
    if (status === STATUS_SUCCESS) {
      yield put(fetchListProductSuccess(data));
    } else {
      yield put(fetchListProductError(data));
    }
  }
}

function* deleteProductAction({ payload: { id } }) {
  const res = yield call(deleteProduct, id);
  const { data, status, message } = res;
  if (status === STATUS_SUCCESS) {
    yield put(deleteProductSuccess(data));
  } else {
    yield put(deleteProductFailed(data));
    toast.error(message);
  }
  yield delay(500);
}

function* productSaga() {
  yield fork(watchFetchListProductAction);
  yield takeEvery(PRODUCT_DELETE, deleteProductAction);
}

export default productSaga;
