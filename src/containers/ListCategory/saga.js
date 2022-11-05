import { call, put, takeEvery } from 'redux-saga/effects';
import { DELETE_CATEGORY_REQUEST, GET_CATEGORY_REQUEST } from './constants';
import { get, deleteCategory as remove } from './service';
import {
  getCategoriesSuccess,
  getCategoriesFailed,
  deleteCategorySuccess,
  deleteCategoryFailed,
} from './actions';

function* getCategory() {
  const res = yield call(get);
  const { data } = res;
  const { status, message } = data;
  if (status) {
    yield put(getCategoriesSuccess(data));
  } else {
    yield put(getCategoriesFailed(message));
  }
}

function* deleteCategory({ payload: { id }, navigate }) {
  const res = yield call(remove, id);
  const {
    data: { status, message },
  } = res;
  if (status) {
    yield put(deleteCategorySuccess());
    navigate('/admin/categories');
  } else {
    yield put(deleteCategoryFailed(message));
  }
}

function* category() {
  yield takeEvery(GET_CATEGORY_REQUEST, getCategory);
  yield takeEvery(DELETE_CATEGORY_REQUEST, deleteCategory);
}

export default category;
