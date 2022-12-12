import { call, put, takeEvery } from 'redux-saga/effects';
import {
  ADD_PRODUCT_REQUEST,
  GET_ALL_CATEGORY_REQUEST,
  GET_ALL_BRAND_REQUEST,
} from './constants';
import {
  addProduct as addProductApi,
  getAllCategory as getAllCategoryApi,
  getAllBrand as getAllBrandApi,
} from './service';
import {
  uploadFile as uploadFileService,
  setHeaderContent,
} from '../../UploadFile/service';
import {
  addProductSuccess,
  addProductFailed,
  getAllCategoriesSuccess,
  getAllCategoriesFailed,
  getAllBrandsSuccess,
  getAllBrandsFailed,
} from './actions';

function* handleAddProduct(data) {
  const res = yield call(addProductApi, data);
  const {
    data: { status },
  } = res;

  if (status) {
    yield put(addProductSuccess());
  } else {
    yield put(addProductFailed());
  }
}

function* addProduct({ payload: { data, file, callback } }) {
  yield call(setHeaderContent);
  const res = yield call(uploadFileService, file);

  const {
    data: { status, data: dataFile },
  } = res;

  if (status) {
    yield* handleAddProduct({ ...data, images: dataFile });
  } else {
    yield put(addProductFailed());
  }

  if (callback instanceof Function) callback();
}

function* getAllCategory() {
  const res = yield call(getAllCategoryApi);

  const {
    data: { status, data },
  } = res;

  if (status) {
    yield put(getAllCategoriesSuccess(data));
  } else {
    yield put(getAllCategoriesFailed());
  }
}

function* getAllBrand() {
  const res = yield call(getAllBrandApi);

  const {
    data: { status, data },
  } = res;

  if (status) {
    yield put(getAllBrandsSuccess(data));
  } else {
    yield put(getAllBrandsFailed());
  }
}

function* addProductSaga() {
  yield takeEvery(ADD_PRODUCT_REQUEST, addProduct);
  yield takeEvery(GET_ALL_CATEGORY_REQUEST, getAllCategory);
  yield takeEvery(GET_ALL_BRAND_REQUEST, getAllBrand);
}

export default addProductSaga;
