import {
  GET_ORDERS_LIST_REQUEST,
  GET_ORDERS_LIST_SUCCESS,
  GET_ORDERS_LIST_FAILED,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAILED,
} from './constants';

export const getOrders = options => ({
  type: GET_ORDERS_LIST_REQUEST,
  payload: {
    options,
  },
});

export const getOrdersSuccess = ({ data, meta }) => ({
  type: GET_ORDERS_LIST_SUCCESS,
  payload: {
    data,
    meta,
  },
});

export const getOrdersListFailed = messages => ({
  type: GET_ORDERS_LIST_FAILED,
  payload: { messages },
});

export const deleteOrder = (id, callback) => ({
  type: DELETE_ORDER_REQUEST,
  payload: { id, callback },
});

export const deleteOrderSuccess = () => ({
  type: DELETE_ORDER_SUCCESS,
});

export const deleteOrderFailed = messages => ({
  type: DELETE_ORDER_FAILED,
  payload: { messages },
});
