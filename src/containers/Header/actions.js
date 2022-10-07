import {
  FILTER_PRODUCT,
  FILTER_PRODUCT_FAILED,
  FILTER_PRODUCT_SUCCESS,
} from './constants';

export const filterProduct = keyword => ({
  type: FILTER_PRODUCT,
  payload: {
    keyword,
  },
});

export const filterProductSuccess = data => ({
  type: FILTER_PRODUCT_SUCCESS,
  payload: {
    data,
  },
});

export const filterProductFailed = error => ({
  type: FILTER_PRODUCT_FAILED,
  payload: {
    error,
  },
});
