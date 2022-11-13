import { takeEvery, call, put } from 'redux-saga/effects';

import { DELETE_PRODUCTS_REQUEST, GET_PRODUCTS_REQUEST } from './constants';
import {
  getProducts as getProductsService,
  deleteProduct as deleteProductService,
} from './service';
import {
  getProductSuccess,
  getProductFailed,
  deleteProductSuccess,
  deleteProductFailed,
} from './actions';

function* getProducts() {
  const res = yield call(getProductsService);

  const { status, data } = res;

  if (status) {
    yield put(getProductSuccess(data));
  } else {
    const { message } = data;
    yield put(getProductFailed(message));
  }
}

function* deleteProduct({ payload: { id } }) {
  const res = yield call(deleteProductService, id);

  const { status, data } = res;

  if (status) {
    yield put(deleteProductSuccess());
    yield put({ type: GET_PRODUCTS_REQUEST });
  } else {
    const { message } = data;
    yield put(deleteProductFailed(message));
  }
}

function* listProduct() {
  yield takeEvery(GET_PRODUCTS_REQUEST, getProducts);
  yield takeEvery(DELETE_PRODUCTS_REQUEST, deleteProduct);
}

export default listProduct;
