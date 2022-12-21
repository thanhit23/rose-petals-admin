import { call, put, takeEvery } from 'redux-saga/effects';

import { DELETE_CATEGORY_REQUEST, GET_CATEGORY_REQUEST } from './constants';
import { get, deleteCategory as remove } from './service';
import {
  getCategoriesSuccess,
  getCategoriesFailed,
  deleteCategorySuccess,
  deleteCategoryFailed,
} from './actions';
import { getObjectAcceptArrayKey } from '../../../helpers';

function* getCategory({ payload: { options } }) {
  const queryAccept = ['name', 'page'];

  const option = getObjectAcceptArrayKey(queryAccept, { page: 1, ...options });

  const res = yield call(get, option);

  const { data } = res;

  const { status, message } = data;

  if (status) {
    yield put(getCategoriesSuccess(data));
  } else {
    yield put(getCategoriesFailed(message));
  }
}

function* deleteCategory({ payload: { id, callback } }) {
  const res = yield call(remove, id);

  const {
    data: { status, message },
  } = res;
  if (status) {
    yield put(deleteCategorySuccess());
    if (callback instanceof Function) callback();
  } else {
    yield put(deleteCategoryFailed(message));
  }
}

function* category() {
  yield takeEvery(GET_CATEGORY_REQUEST, getCategory);
  yield takeEvery(DELETE_CATEGORY_REQUEST, deleteCategory);
}

export default category;
