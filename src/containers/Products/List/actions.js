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

export const getProductFailed = () => ({
  type: GET_PRODUCTS_LIST_FAILED,
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
