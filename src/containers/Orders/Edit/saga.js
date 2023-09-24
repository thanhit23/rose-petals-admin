import { call, put, takeEvery } from 'redux-saga/effects';
import { UPDATE_ORDER_REQUEST, GET_ORDERS_REQUEST } from './constants';
import { getOrder as getOrderService, updateOrder } from './service';
import { updateOrderSuccessfully, updateOrderFailed, getOrderSuccessfully, getOrderFailed } from './actions';

function* updateOrderInformation({ payload: { id, data, callback } }) {
  const res = yield call(updateOrder, id, data);

  const {
    data: { status, message },
  } = res;

  if (status) {
    yield put(updateOrderSuccessfully());
  } else {
    yield put(updateOrderFailed(message));
  }

  if (callback instanceof Function) callback({ status });
}

function* getOrder({ payload: { id, callback } }) {
  const res = yield call(getOrderService, id);

  if (!res && typeof callback === 'function') callback();

  const { status, data } = res;

  if (status) {
    yield put(getOrderSuccessfully(data));
  } else {
    const { message } = data;
    yield put(getOrderFailed(message));
  }
}

function* editOrder() {
  yield takeEvery(UPDATE_ORDER_REQUEST, updateOrderInformation);
  yield takeEvery(GET_ORDERS_REQUEST, getOrder);
}

export default editOrder;
