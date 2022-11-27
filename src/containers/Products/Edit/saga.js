import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_DETAIL_PRODUCT_REQUEST,
  GET_ALL_BRAND_REQUEST,
  GET_ALL_CATEGORY_REQUEST,
  UPDATE_PRODUCT_REQUEST,
} from './constants';
import {
  getProduct,
  getBrands,
  getCategories as getCategoriesService,
  updateProduct as updateProductService,
} from './service';
import {
  getDetailProductSuccess,
  getDetailProductFailed,
  getAllBrandsSuccess,
  getAllBrandsFailed,
  getAllCategoriesSuccess,
  updateProductFailed,
} from './actions';

function* updateProduct({ payload: { id, data, callback } }) {
  const res = yield call(updateProductService, id, data);
  const { status } = res;

  if (status) {
    yield put(getDetailProductSuccess(data));
  } else {
    const { message } = data;
    yield put(getDetailProductFailed(message));
  }

  if (callback instanceof Function) callback();
}

function* getDetailProduct({ payload: { id } }) {
  const res = yield call(getProduct, id);
  const { status, data } = res;

  if (status) {
    yield put(getDetailProductSuccess(data));
  } else {
    const { message } = data;
    yield put(getDetailProductFailed(message));
  }
}

function* getBrand() {
  const res = yield call(getBrands);

  const { data } = res;
  const { status } = data;

  if (status) {
    yield put(getAllBrandsSuccess(data));
  } else {
    yield put(getAllBrandsFailed());
  }
}

function* getCategories() {
  const res = yield call(getCategoriesService);

  const { data } = res;
  const { status } = data;

  if (status) {
    yield put(getAllCategoriesSuccess(data));
  } else {
    yield put(updateProductFailed());
  }
}

function* editProduct() {
  yield takeEvery(GET_DETAIL_PRODUCT_REQUEST, getDetailProduct);
  yield takeEvery(GET_ALL_BRAND_REQUEST, getBrand);
  yield takeEvery(GET_ALL_CATEGORY_REQUEST, getCategories);
  yield takeLatest(UPDATE_PRODUCT_REQUEST, updateProduct);
}

export default editProduct;
