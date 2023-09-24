import { call, put, takeEvery } from 'redux-saga/effects';

import { getOrders as getOrdersService, deleteOrder as deleteOrderService } from './service';
import { getOrdersSuccess, getOrdersListFailed, deleteOrderFailed, deleteOrderSuccess } from './actions';
import { getObjectAcceptArrayKey } from '../../../helpers';
import { GET_ORDERS_LIST_REQUEST, DELETE_ORDER_REQUEST } from './constants';

function* getOrders({ payload: { options } }) {
  const queryAccept = ['role', 'name', 'page'];

  const option = getObjectAcceptArrayKey(queryAccept, { page: 1, ...options });

  const res = yield call(getOrdersService, option);

  const { status, data } = res;

  if (status) {
    yield put(getOrdersSuccess(data));
  } else {
    const { message } = data;
    yield put(getOrdersListFailed(message));
  }
}

function* deleteOrder({ payload: { id, callback } }) {
  const res = yield call(deleteOrderService, id);

  const { status, data } = res;

  if (status) {
    yield put(deleteOrderSuccess());
    if (callback instanceof Function) callback();
  } else {
    const { message } = data;
    yield put(deleteOrderFailed(message));
  }
}

function* orderSaga() {
  yield takeEvery(GET_ORDERS_LIST_REQUEST, getOrders);
  yield takeEvery(DELETE_ORDER_REQUEST, deleteOrder);
}

export default orderSaga;
