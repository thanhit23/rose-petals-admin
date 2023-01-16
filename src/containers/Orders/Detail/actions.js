import {
  GET_ORDER_DETAIL_REQUEST,
  GET_ORDER_DETAIL_FAILED,
  GET_ORDER_DETAIL_SUCCESS,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  DELETE_ORDER_DETAIL_REQUEST,
  DELETE_ORDER_DETAIL_SUCCESS,
  DELETE_ORDER_DETAIL_FAILED,
  RESET_ORDER_DETAIL,
} from './constants';

export const getOrderDetail = id => ({
  type: GET_ORDER_DETAIL_REQUEST,
  payload: { id },
});

export const getOrderDetailSuccess = data => ({
  type: GET_ORDER_DETAIL_SUCCESS,
  payload: { data },
});

export const getOrderDetailFailed = messages => ({
  type: GET_ORDER_DETAIL_FAILED,
  payload: { messages },
});

export const getOrder = id => ({
  type: GET_ORDER_REQUEST,
  payload: { id },
});

export const getOrderSuccess = data => ({
  type: GET_ORDER_SUCCESS,
  payload: { data },
});

export const getOrderFailed = messages => ({
  type: GET_ORDER_FAILED,
  payload: { messages },
});

export const deleteProductDetail = (idOrder, id) => ({
  type: DELETE_ORDER_DETAIL_REQUEST,
  payload: { idOrder, id },
});

export const deleteProductDetailSuccess = () => ({
  type: DELETE_ORDER_DETAIL_SUCCESS,
});

export const deleteProductDetailFailed = messages => ({
  type: DELETE_ORDER_DETAIL_FAILED,
  payload: { messages },
});

export const resetOrderDetail = () => ({
  type: RESET_ORDER_DETAIL,
});
