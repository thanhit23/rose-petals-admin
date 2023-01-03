import { call, put, takeEvery } from 'redux-saga/effects';

import {
  getOrders as getOrdersService,
  deleteOrder as deleteOrderService,
} from './service';
import {
  getOrders as getOrdersAction,
  getOrdersSuccess,
  getOrdersListFailed,
  deleteOrderFailed,
  deleteOrderSuccess,
} from './actions';
import { getObjectAcceptArrayKey } from '../../../helpers';
import { GET_ORDERS_REQUEST_TABLE, DELETE_ORDER_REQUEST } from './constants';

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

function* deleteOrder({ payload: { id } }) {
  const res = yield call(deleteOrderService, id);

  const { status, data } = res;

  if (status) {
    yield put(getOrdersAction());
    yield put(deleteOrderSuccess());
  } else {
    const { message } = data;
    yield put(deleteOrderFailed(message));
  }
}

function* orderSaga() {
  yield takeEvery(GET_ORDERS_REQUEST_TABLE, getOrders);
  yield takeEvery(DELETE_ORDER_REQUEST, deleteOrder);
}

export default orderSaga;
