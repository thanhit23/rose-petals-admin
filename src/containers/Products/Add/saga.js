import { call, put, takeEvery } from 'redux-saga/effects';
import { ADD_PRODUCT_REQUEST, GET_ALL_CATEGORY_REQUEST } from './constants';
import {
  addProduct as addProductApi,
  getAllCategory as getAllCategoryApi,
} from './service';
import {
  addProductSuccess,
  addProductFailed,
  getAllCategoriesSuccess,
  getAllCategoriesFailed,
} from './actions';

function* addProductSaga({ payload: { data, callback } }) {
  const res = yield call(addProductApi, { ...data, images: [] });

  const {
    data: { status },
  } = res;

  if (status) {
    yield put(addProductSuccess());
    if (typeof callback === 'function') callback();
  } else {
    yield put(addProductFailed());
  }
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

function* addProduct() {
  yield takeEvery(ADD_PRODUCT_REQUEST, addProductSaga);
  yield takeEvery(GET_ALL_CATEGORY_REQUEST, getAllCategory);
}

export default addProduct;
