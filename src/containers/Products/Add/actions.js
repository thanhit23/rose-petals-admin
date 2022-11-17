import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_SUCCESS,
  GET_ALL_CATEGORY_REQUEST,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAILED,
} from './constants';

export const addProduct = (data, callback) => ({
  type: ADD_PRODUCT_REQUEST,
  payload: { data, callback },
});

export const addProductSuccess = () => ({
  type: ADD_PRODUCT_SUCCESS,
});

export const addProductFailed = message => ({
  type: ADD_PRODUCT_FAILED,
  payload: { message },
});

export const getAllCategories = () => ({
  type: GET_ALL_CATEGORY_REQUEST,
});

export const getAllCategoriesSuccess = data => ({
  type: GET_ALL_CATEGORY_SUCCESS,
  payload: { data },
});

export const getAllCategoriesFailed = message => ({
  type: GET_ALL_CATEGORY_FAILED,
  payload: { message },
});
