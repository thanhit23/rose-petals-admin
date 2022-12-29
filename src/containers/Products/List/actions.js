import {
  GET_PRODUCTS_REQUEST_TABLE,
  GET_PRODUCTS_SUCCESS_TABLE,
  GET_PRODUCTS_FAILED_TABLE,
  DELETE_PRODUCTS_REQUEST,
  DELETE_PRODUCTS_SUCCESS,
  DELETE_PRODUCTS_FAILED,
} from './constants';

export const getProduct = options => ({
  type: GET_PRODUCTS_REQUEST_TABLE,
  payload: { options },
});

export const getProductSuccess = ({ data, meta }) => ({
  type: GET_PRODUCTS_SUCCESS_TABLE,
  payload: {
    data,
    meta,
  },
});

export const getProductFailed = () => ({
  type: GET_PRODUCTS_FAILED_TABLE,
});

export const deleteProduct = id => ({
  type: DELETE_PRODUCTS_REQUEST,
  payload: {
    id,
  },
});

export const deleteProductSuccess = () => ({
  type: DELETE_PRODUCTS_SUCCESS,
});

export const deleteProductFailed = () => ({
  type: DELETE_PRODUCTS_FAILED,
});
