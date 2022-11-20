import {
  GET_DETAIL_BRAND_REQUEST,
  GET_DETAIL_BRAND_SUCCESS,
  GET_DETAIL_BRAND_FAILED,
  CLEAR_DETAIL_BRAND_OLD,
  UPDATE_BRAND_REQUEST,
  UPDATE_BRAND_FAILED,
  UPDATE_BRAND_SUCCESS,
} from './constants';

export const clearDetailBrandOld = () => ({
  type: CLEAR_DETAIL_BRAND_OLD,
});

export const getDetailBrand = id => ({
  type: GET_DETAIL_BRAND_REQUEST,
  payload: { id },
});

export const getDetailBrandSuccess = ({ data }) => ({
  type: GET_DETAIL_BRAND_SUCCESS,
  payload: { data },
});

export const getDetailBrandFailed = () => ({
  type: GET_DETAIL_BRAND_FAILED,
});

export const updateBrand = (id, data, callback) => ({
  type: UPDATE_BRAND_REQUEST,
  payload: { id, data, callback },
});

export const updateBrandSuccess = () => ({
  type: UPDATE_BRAND_SUCCESS,
});

export const updateBrandFailed = () => ({
  type: UPDATE_BRAND_FAILED,
});
