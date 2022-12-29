import {
  GET_BRAND_REQUEST_TABLE,
  GET_BRAND_SUCCESS_TABLE,
  GET_BRAND_FAILED_TABLE,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  DELETE_BRAND_FAILED,
} from './constants';

export const getBrand = options => ({
  type: GET_BRAND_REQUEST_TABLE,
  payload: { options },
});

export const getBrandSuccess = ({ data, meta }) => ({
  type: GET_BRAND_SUCCESS_TABLE,
  payload: { data, meta },
});

export const getBrandFailed = () => ({
  type: GET_BRAND_FAILED_TABLE,
});

export const deleteBrand = id => ({
  type: DELETE_BRAND_REQUEST,
  payload: { id },
});

export const deleteBrandSuccess = () => ({
  type: DELETE_BRAND_SUCCESS,
});

export const deleteBrandFailed = () => ({
  type: DELETE_BRAND_FAILED,
});
