import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_SUCCESS,
  GET_ALL_CATEGORY_REQUEST,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAILED,
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

export const getCategories = () => ({
  type: GET_ALL_CATEGORY_REQUEST,
});

export const getCategoriesSuccess = data => ({
  type: GET_ALL_CATEGORY_SUCCESS,
  payload: { data },
});

export const getCategoriesFailed = message => ({
  type: GET_ALL_CATEGORY_FAILED,
  payload: { message },
});
