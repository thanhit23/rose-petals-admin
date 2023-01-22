import { takeEvery, call, put } from 'redux-saga/effects';

import { GET_PRODUCTS_REVIEW_LIST_REQUEST } from './constants';
import { getObjectAcceptArrayKey } from '../../../helpers';
import { getProductReview as getProductsService } from './service';
import { getProductReviewSuccess, getProductReviewFailed } from './actions';

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

function* productReview() {
  yield takeEvery(GET_PRODUCTS_REVIEW_LIST_REQUEST, getProductReview);
}

export default productReview;
