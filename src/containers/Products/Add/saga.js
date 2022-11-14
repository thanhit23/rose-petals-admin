import { call, put, takeEvery } from 'redux-saga/effects';
import { ADD_PRODUCT_REQUEST, GET_ALL_CATEGORY_REQUEST } from './constants';
import {
  addProduct as addProductApi,
  getAllCategory as getAllCategoryApi,
} from './service';
import {
  addProductSuccess,
  addProductFailed,
  getCategoriesSuccess,
  getCategoriesFailed,
} from './actions';

function* addProductSaga({ payload: { data, callback } }) {
  const res = yield call(addProductApi, data);

  const {
    data: { status },
  } = res;

  if (status) {
    yield put(addProductSuccess());
    callback();
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
    yield put(getCategoriesSuccess(data));
  } else {
    yield put(getCategoriesFailed());
  }
}

function* addProduct() {
  yield takeEvery(ADD_PRODUCT_REQUEST, addProductSaga);
  yield takeEvery(GET_ALL_CATEGORY_REQUEST, getAllCategory);
}

export default addProduct;
