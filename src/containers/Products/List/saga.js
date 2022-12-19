import { takeEvery, call, put } from 'redux-saga/effects';
import { isEmpty } from 'lodash';

import { DELETE_PRODUCTS_REQUEST, GET_PRODUCTS_REQUEST } from './constants';
import { getObjectAcceptArrayKey } from '../../../helpers';
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

function* getProducts({ payload: { options } }) {
  let option = { page: 1 };

  const ruleOption = ['name', 'page'];

  if (!isEmpty(options)) {
    option = getObjectAcceptArrayKey(ruleOption, options);
  }

  const res = yield call(getProductsService, option);

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
