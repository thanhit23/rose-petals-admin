import { call, put, takeEvery } from 'redux-saga/effects';
import { ADD_PRODUCT_REQUEST } from './constants';
import { addProduct as addProductApi } from './service';
import { addProductSuccess, addProductFailed } from './actions';

function* addProductSaga({ payload: { data, callback } }) {
  const res = yield call(addProductApi, data);

  const {
    data: { status },
  } = res;

  if (status) {
    yield put(addProductSuccess());
    callback();
  } else {
    yield put(addProductFailed());
  }
}

function* addProduct() {
  yield takeEvery(ADD_PRODUCT_REQUEST, addProductSaga);
}

export default addProduct;
