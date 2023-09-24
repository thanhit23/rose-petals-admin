import { takeEvery, call, put } from 'redux-saga/effects';

import { DELETE_PRODUCTS_REQUEST, GET_PRODUCTS_LIST_REQUEST } from './constants';
import { getObjectAcceptArrayKey } from '../../../helpers';
import { getProducts as getProductsService, deleteProduct as deleteProductService } from './service';
import { getProductSuccess, getProductFailed, deleteProductSuccess, deleteProductFailed } from './actions';

function* getProducts({ payload: { options } }) {
  const queryAccept = ['name', 'page'];

  const option = getObjectAcceptArrayKey(queryAccept, { page: 1, ...options });

  const res = yield call(getProductsService, option);

  const { status, data } = res;

  if (status) {
    yield put(getProductSuccess(data));
  } else {
    const { message } = data;
    yield put(getProductFailed(message));
  }
}

function* deleteProduct({ payload: { id, callback } }) {
  const res = yield call(deleteProductService, id);

  const { status, data } = res;

  if (status) {
    yield put(deleteProductSuccess());
    if (callback instanceof Function) callback();
  } else {
    const { message } = data;
    yield put(deleteProductFailed(message));
  }
}

function* listProduct() {
  yield takeEvery(GET_PRODUCTS_LIST_REQUEST, getProducts);
  yield takeEvery(DELETE_PRODUCTS_REQUEST, deleteProduct);
}

export default listProduct;
