import {
  ADD_BRAND_REQUEST,
  ADD_BRAND_SUCCESS,
  ADD_BRAND_FAILED,
} from './constants';

export const addBrand = (data, callback) => ({
  type: ADD_BRAND_REQUEST,
  payload: { data, callback },
});

export const addBrandSuccess = () => ({
  type: ADD_BRAND_SUCCESS,
});

export const addBrandFailed = message => ({
  type: ADD_BRAND_FAILED,
  payload: { message },
});
