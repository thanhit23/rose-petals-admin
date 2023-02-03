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
  updateProductSuccess,
} from './actions';
import { uploadFile as uploadFileService } from '../../UploadFile/service';

function* updateProduct({ payload: { id, data, file, callback } }) {
  if (file) {
    const res = yield call(uploadFileService, file);
    const {
      data: { status, data: dataFile, message },
    } = res;

    if (status) {
      const { images } = data;
      Object.assign(data, { images: [...images, ...dataFile] });
    } else {
      yield put(updateProductFailed(message));
    }
  }

  const res = yield call(updateProductService, id, data);
  const {
    data: { status },
  } = res;

  if (status) {
    yield put(updateProductSuccess());
  } else {
    yield put(updateProductFailed());
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
