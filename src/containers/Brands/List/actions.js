import {
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
  GET_BRAND_FAILED,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  DELETE_BRAND_FAILED,
} from './constants';

export const getBrand = () => ({
  type: GET_BRAND_REQUEST,
});

export const getBrandSuccess = ({ data, meta }) => ({
  type: GET_BRAND_SUCCESS,
  payload: { data, meta },
});

export const getBrandFailed = () => ({
  type: GET_BRAND_FAILED,
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
