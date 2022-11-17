import {
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_FAILED,
  GET_CATEGORY_DETAIL_SUCCESS,
  GET_CATEGORY_DETAIL_REQUEST,
  GET_CATEGORY_DETAIL_FAILED,
} from './constants';

export const getCategory = id => ({
  type: GET_CATEGORY_DETAIL_REQUEST,
  payload: { id },
});
export const getCategorySuccessfully = data => ({
  type: GET_CATEGORY_DETAIL_SUCCESS,
  payload: {
    data,
  },
});
export const getCategoryFailed = () => ({
  type: GET_CATEGORY_DETAIL_FAILED,
});

export const updateCategory = (id, data, callback) => ({
  type: UPDATE_CATEGORY_REQUEST,
  payload: { id, data, callback },
});
export const updateCategorySuccessfully = () => ({
  type: UPDATE_CATEGORY_SUCCESS,
});
export const updateCategoryFailed = () => ({
  type: UPDATE_CATEGORY_FAILED,
});
