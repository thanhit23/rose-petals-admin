import {
  GET_ORDERS_REQUEST_TABLE,
  GET_ORDERS_SUCCESS_TABLE,
  GET_ORDERS_FAILED_TABLE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAILED,
} from './constants';

export const getOrders = options => ({
  type: GET_ORDERS_REQUEST_TABLE,
  payload: {
    options,
  },
});

export const getOrdersSuccess = ({ data, meta }) => ({
  type: GET_ORDERS_SUCCESS_TABLE,
  payload: {
    data,
    meta,
  },
});

export const getOrdersListFailed = messages => ({
  type: GET_ORDERS_FAILED_TABLE,
  payload: { messages },
});

export const deleteOrder = id => ({
  type: DELETE_ORDER_REQUEST,
  payload: { id },
});

export const deleteOrderSuccess = () => ({
  type: DELETE_ORDER_SUCCESS,
});

export const deleteOrderFailed = messages => ({
  type: DELETE_ORDER_FAILED,
  payload: { messages },
});
