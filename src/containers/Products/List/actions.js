import {
  GET_PRODUCTS_LIST_REQUEST,
  GET_PRODUCTS_LIST_SUCCESS,
  GET_PRODUCTS_LIST_FAILED,
  DELETE_PRODUCTS_REQUEST,
  DELETE_PRODUCTS_SUCCESS,
  DELETE_PRODUCTS_FAILED,
} from './constants';

export const getProduct = options => ({
  type: GET_PRODUCTS_LIST_REQUEST,
  payload: { options },
});

export const getProductSuccess = ({ data, meta }) => ({
  type: GET_PRODUCTS_LIST_SUCCESS,
  payload: {
    data,
    meta,
  },
});

export const getProductFailed = message => ({
  type: GET_PRODUCTS_LIST_FAILED,
  payload: { message },
});

export const deleteProduct = (id, callback) => ({
  type: DELETE_PRODUCTS_REQUEST,
  payload: {
    id,
    callback,
  },
});

export const deleteProductSuccess = () => ({
  type: DELETE_PRODUCTS_SUCCESS,
});

export const deleteProductFailed = message => ({
  type: DELETE_PRODUCTS_FAILED,
  payload: { message },
});
