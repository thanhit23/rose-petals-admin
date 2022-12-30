import {
  GET_ORDERS_REQUEST_TABLE,
  GET_ORDERS_SUCCESS_TABLE,
  GET_ORDERS_FAILED_TABLE,
  DELETE_ORDERS_REQUEST,
  DELETE_ORDERS_SUCCESS,
  DELETE_ORDERS_FAILED,
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

export const deleteOrder = (id, callback) => ({
  type: DELETE_ORDERS_REQUEST,
  payload: { id, callback },
});

export const deleteOrderSuccess = () => ({
  type: DELETE_ORDERS_SUCCESS,
});

export const deleteOrderFailed = messages => ({
  type: DELETE_ORDERS_FAILED,
  payload: { messages },
});
