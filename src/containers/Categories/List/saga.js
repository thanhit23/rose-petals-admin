import { call, put, takeEvery } from 'redux-saga/effects';

import {
  getCategories as getCategoriesService,
  deleteCategory as deleteCategoryService,
} from './service';
import {
  getCategoriesSuccess,
  getCategoriesFailed,
  deleteCategorySuccess,
  deleteCategoryFailed,
} from './actions';
import { getObjectAcceptArrayKey } from '../../../helpers';
import {
  DELETE_CATEGORY_REQUEST,
  GET_CATEGORY_LIST_REQUEST,
} from './constants';

function* getCategory({ payload: { options } }) {
  const queryAccept = ['name', 'page'];

  const option = getObjectAcceptArrayKey(queryAccept, { page: 1, ...options });

  const res = yield call(getCategoriesService, option);

  const { data } = res;

  const { status, message } = data;

  if (status) {
    yield put(getCategoriesSuccess(data));
  } else {
    yield put(getCategoriesFailed(message));
  }
}

function* deleteCategory({ payload: { id, callback } }) {
  const res = yield call(deleteCategoryService, id);

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
  yield takeEvery(GET_CATEGORY_LIST_REQUEST, getCategory);
  yield takeEvery(DELETE_CATEGORY_REQUEST, deleteCategory);
}

export default category;
