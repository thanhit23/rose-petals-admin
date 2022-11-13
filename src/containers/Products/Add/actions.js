import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_SUCCESS,
} from './constants';

export const addProduct = () => ({
  type: ADD_PRODUCT_REQUEST,
});

export const addProductSuccess = (data, callback) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: { data, callback },
});

export const addProductFailed = message => ({
  type: ADD_PRODUCT_FAILED,
  payload: { message },
});
