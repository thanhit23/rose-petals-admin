import { call, put, takeEvery } from 'redux-saga/effects';

import {
  getOrders as getOrdersService,
  deleteOrder as deleteOrderService,
} from './service';
import {
  getOrdersSuccess,
  getOrdersListFailed,
  deleteOrderSuccess,
  deleteOrderFailed,
} from './actions';
import { getObjectAcceptArrayKey } from '../../../helpers';
import { GET_ORDERS_REQUEST_TABLE, DELETE_ORDERS_REQUEST } from './constants';

function* getUsers({ payload: { options } }) {
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

function* deleteUser({ payload: { id, callback } }) {
  const res = yield call(deleteOrderService, id);

  const { status, data } = res;

  if (status) {
    yield put(deleteOrderSuccess());
    yield callback();
  } else {
    const { message } = data;
    yield put(deleteOrderFailed(message));
  }
}

function* orderSaga() {
  yield takeEvery(GET_ORDERS_REQUEST_TABLE, getUsers);
  yield takeEvery(DELETE_ORDERS_REQUEST, deleteUser);
}

export default orderSaga;
