import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_BRAND_REQUEST, DELETE_BRAND_REQUEST } from './constants';
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

function* getBrand() {
  const res = yield call(getBrandService);

  const { data } = res;
  const { status } = data;

  if (status) {
    yield put(getBrandSuccess(data));
  } else {
    yield put(getBrandFailed());
  }
}

function* deleteBrand({ payload: { id } }) {
  const res = yield call(deleteBrandService, id);

  const { status } = res;

  if (status) {
    yield put(deleteBrandSuccess());
    yield put({ type: GET_BRAND_REQUEST });
  } else {
    yield put(deleteBrandFailed());
  }
}

function* listBrand() {
  yield takeEvery(GET_BRAND_REQUEST, getBrand);
  yield takeEvery(DELETE_BRAND_REQUEST, deleteBrand);
}

export default listBrand;
