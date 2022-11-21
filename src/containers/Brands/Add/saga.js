import { takeEvery, call, put } from 'redux-saga/effects';
import { ADD_BRAND_REQUEST } from './constants';
import { addBrand as addBrandService } from './service';
import { addBrandSuccess, addBrandFailed } from './actions';

function* addBrand({ payload: { data, callback } }) {
  const res = yield call(addBrandService, data);
  const { status } = res;

  if (status) {
    yield put(addBrandSuccess());
  } else {
    yield put(addBrandFailed());
  }

  if (callback instanceof Function) callback();
}

function* addBrandSaga() {
  yield takeEvery(ADD_BRAND_REQUEST, addBrand);
}

export default addBrandSaga;
