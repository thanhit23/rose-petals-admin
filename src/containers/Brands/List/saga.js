import { takeEvery, call, put } from 'redux-saga/effects';

import {
  getBrand as getBrandService,
  deleteBrand as deleteBrandService,
} from './service';
import {
  getBrandSuccess,
  getBrandFailed,
  deleteBrandSuccess,
  deleteBrandFailed,
} from './actions';
import { getObjectAcceptArrayKey } from '../../../helpers';
import { GET_BRAND_LIST_REQUEST, DELETE_BRAND_REQUEST } from './constants';

function* getBrands({ payload: { options } }) {
  const queryAccept = ['name', 'page'];

  const option = getObjectAcceptArrayKey(queryAccept, { page: 1, ...options });

  const res = yield call(getBrandService, option);

  const { data } = res;

  const { status, message } = data;

  if (status) {
    yield put(getBrandSuccess(data));
  } else {
    yield put(getBrandFailed(message));
  }
}

function* deleteBrand({ payload: { id, callback } }) {
  const res = yield call(deleteBrandService, id);

  const {
    data: { status, message },
  } = res;

  if (status) {
    yield put(deleteBrandSuccess());
    if (callback instanceof Function) callback();
  } else {
    yield put(deleteBrandFailed(message));
  }
}

function* listBrand() {
  yield takeEvery(GET_BRAND_LIST_REQUEST, getBrands);
  yield takeEvery(DELETE_BRAND_REQUEST, deleteBrand);
}

export default listBrand;
