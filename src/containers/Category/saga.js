import { call, put, takeEvery } from 'redux-saga/effects';
import { DELETE_CATEGORY_REQUEST, GET_CATEGORY_REQUEST } from './constants';
import { get, deleteCategory as remove } from './service';
import { getCategoriesSuccess, getCategoriesFailed } from './actions';

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

function* deleteCategory({ payload: { id } }) {
  const res = yield call(remove, id);
  console.log(res, 'res');
}

function* category() {
  yield takeEvery(GET_CATEGORY_REQUEST, getCategory);
  yield takeEvery(DELETE_CATEGORY_REQUEST, deleteCategory);
}

export default category;
