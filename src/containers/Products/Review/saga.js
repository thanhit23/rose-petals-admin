import { takeEvery, call, put } from 'redux-saga/effects';

import {
  DELETE_PRODUCTS_REVIEW_LIST_REQUEST,
  GET_PRODUCTS_REVIEW_LIST_REQUEST,
} from './constants';
import { getObjectAcceptArrayKey } from '../../../helpers';
import {
  getProductReview as getProductsService,
  deleteProduct as deleteProductService,
} from './service';
import {
  getProductReviewSuccess,
  getProductReviewFailed,
  deleteProductReviewSuccess,
  deleteProductReviewFailed,
} from './actions';

function* getProductReview({ payload: { options } }) {
  const queryAccept = ['name', 'page'];

  const option = getObjectAcceptArrayKey(queryAccept, { page: 1, ...options });

  const res = yield call(getProductsService, option);

  const { status, data } = res;

  if (status) {
    yield put(getProductReviewSuccess(data));
  } else {
    const { message } = data;
    yield put(getProductReviewFailed(message));
  }
}

function* deleteProductReview({ payload: { id, callback } }) {
  const res = yield call(deleteProductService, id);

  const { status, data } = res;

  if (status) {
    yield put(deleteProductReviewSuccess());
    if (callback instanceof Function) callback();
  } else {
    const { message } = data;
    yield put(deleteProductReviewFailed(message));
  }
}

function* productReview() {
  yield takeEvery(GET_PRODUCTS_REVIEW_LIST_REQUEST, getProductReview);
  yield takeEvery(DELETE_PRODUCTS_REVIEW_LIST_REQUEST, deleteProductReview);
}

export default productReview;
