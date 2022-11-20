import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_DETAIL_BRAND_REQUEST, UPDATE_BRAND_REQUEST } from './constants';
import {
  getDetailBrandSuccess,
  getDetailBrandFailed,
  updateBrandSuccess,
  updateBrandFailed,
} from './actions';
import { getDetailBrand, updateBrand as updateBrandService } from './service';

function* updateBrand({ payload: { id, data: dataBody, callback } }) {
  const res = yield call(updateBrandService, id, dataBody);
  const { status, data } = res;

  if (status) {
    yield put(updateBrandSuccess());
  } else {
    const { message } = data;
    yield put(updateBrandFailed(message));
  }

  if (callback instanceof Function) callback();
}

function* getDetail({ payload: { id } }) {
  const res = yield call(getDetailBrand, id);

  const { status, data } = res;

  if (status) {
    yield put(getDetailBrandSuccess(data));
  } else {
    const { message } = data;
    yield put(getDetailBrandFailed(message));
  }
}

function* editBrand() {
  yield takeEvery(GET_DETAIL_BRAND_REQUEST, getDetail);
  yield takeEvery(UPDATE_BRAND_REQUEST, updateBrand);
}

export default editBrand;
