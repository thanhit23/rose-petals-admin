import { call, takeLatest, put } from 'redux-saga/effects';

import { FILTER_PRODUCT } from './constants';
import { filterProductSuccess } from './actions';
import { searchProduct } from '../../apis';

function* filterProductSaga({ payload: { keyword } }) {
  const res = yield call(searchProduct, keyword);
  yield put(filterProductSuccess(res));
}

function* headerSaga() {
  yield takeLatest(FILTER_PRODUCT, filterProductSaga);
}

export default headerSaga;
