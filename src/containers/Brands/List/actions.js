import {
  GET_BRAND_LIST_REQUEST,
  GET_BRAND_LIST_SUCCESS,
  GET_BRAND_LIST_FAILED,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  DELETE_BRAND_FAILED,
} from './constants';

export const getBrand = options => ({
  type: GET_BRAND_LIST_REQUEST,
  payload: { options },
});

export const getBrandSuccess = ({ data, meta }) => ({
  type: GET_BRAND_LIST_SUCCESS,
  payload: { data, meta },
});

export const getBrandFailed = message => ({
  type: GET_BRAND_LIST_FAILED,
  payload: { message },
});

export const deleteBrand = id => ({
  type: DELETE_BRAND_REQUEST,
  payload: { id },
});

export const deleteBrandSuccess = () => ({
  type: DELETE_BRAND_SUCCESS,
});

export const deleteBrandFailed = message => ({
  type: DELETE_BRAND_FAILED,
  payload: { message },
});
