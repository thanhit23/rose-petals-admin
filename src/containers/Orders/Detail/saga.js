import { call, put, takeEvery } from 'redux-saga/effects';
import {
  GET_ORDER_DETAIL_REQUEST,
  GET_ORDER_REQUEST,
  DELETE_ORDER_DETAIL_REQUEST,
} from './constants';
import {
  getOrderDetail as getOrderDetailService,
  getOrder as getOrderService,
  deleteOrder,
} from './service';
import {
  getOrderDetailSuccess,
  getOrderDetailFailed,
  getOrderSuccess,
  getOrderFailed,
  getOrderDetail as getOrderDetailAction,
  deleteProductDetailSuccess,
  deleteProductDetailFailed,
  resetOrderDetail,
  getOrder as getOrderAction,
} from './actions';

function* getOrderDetail({ payload: { id } }) {
  const res = yield call(getOrderDetailService, id);

  const {
    data: { status, data, message },
  } = res;

  if (status) {
    yield put(getOrderDetailSuccess(data));
  } else {
    yield put(getOrderDetailFailed(message));
  }
}

function* getOrder({ payload: { id } }) {
  const res = yield call(getOrderService, id);

  const {
    data: { status, data, message },
  } = res;

  if (status) {
    yield put(getOrderSuccess(data));
  } else {
    yield put(getOrderFailed(message));
  }
}

function* deleteOrderDetail({ payload: { idOrder, id } }) {
  const res = yield call(deleteOrder, idOrder, id);

  const {
    data: { status, message },
  } = res;

  if (status) {
    yield put(deleteProductDetailSuccess());
    yield put(resetOrderDetail());
    yield put(getOrderAction(idOrder));
    yield put(getOrderDetailAction(idOrder));
  } else {
    yield put(deleteProductDetailFailed(message));
  }
}

function* orderDetail() {
  yield takeEvery(GET_ORDER_REQUEST, getOrder);
  yield takeEvery(GET_ORDER_DETAIL_REQUEST, getOrderDetail);
  yield takeEvery(DELETE_ORDER_DETAIL_REQUEST, deleteOrderDetail);
}

export default orderDetail;
