import { toastError } from '../../helpers/toast';
import {
  FETCH_PRODUCT_REQ,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_SUCCESS,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAILED,
  PRODUCT_UPDATE,
  PRODUCT_DELETE,
  PRODUCT_DELETE_FAILED,
  PRODUCT_DELETE_SUCCESS,
} from './constants';

export const fetchListProduct = () => ({
  type: FETCH_PRODUCT_REQ,
});

export const fetchListProductSuccess = data => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: {
    data,
  },
});

export const fetchListProductError = error => {
  toastError(error);
  return {
    type: FETCH_PRODUCT_ERROR,
    payload: {
      error,
    },
  };
};

export const updateProduct = data => {
  const { name, price } = data;
  return {
    type: PRODUCT_UPDATE,
    payload: {
      name,
      price: Number(price),
    },
  };
};

export const updateProductSuccess = (data, list) => ({
  type: PRODUCT_UPDATE_SUCCESS,
  payload: {
    data,
    list,
  },
});

export const updateProductFailed = error => {
  toastError(error);
  return {
    type: PRODUCT_UPDATE_FAILED,
    payload: {
      error,
    },
  };
};

export const deleteProduct = id => ({
  type: PRODUCT_DELETE,
  payload: {
    id,
  },
});

export const deleteProductSuccess = data => ({
  type: PRODUCT_DELETE_SUCCESS,
  payload: {
    data,
  },
});

export const deleteProductFailed = error => {
  toastError(error);
  return {
    type: PRODUCT_DELETE_FAILED,
    payload: {
      error,
    },
  };
};
