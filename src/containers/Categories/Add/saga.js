import { call, put, takeEvery } from 'redux-saga/effects';
import { CREATE_CATEGORY_REQUEST } from './constants';
import { create } from './service';
import { createCategorySuccessfully, createCategoryFailed } from './actions';

function* createNewCategory({ payload: { data, callback } }) {
  const res = yield call(create, data);

  const {
    data: { status, message },
  } = res;

  if (status) {
    yield put(createCategorySuccessfully());
    if (callback instanceof Function) callback();
  } else {
    yield put(createCategoryFailed(message));
  }
}

function* addCategory() {
  yield takeEvery(CREATE_CATEGORY_REQUEST, createNewCategory);
}

export default addCategory;
