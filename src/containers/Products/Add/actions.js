import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_SUCCESS,
  GET_ALL_CATEGORY_REQUEST,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAILED,
  GET_ALL_BRAND_REQUEST,
  GET_ALL_BRAND_SUCCESS,
  GET_ALL_BRAND_FAILED,
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

export const getAllBrands = () => ({
  type: GET_ALL_BRAND_REQUEST,
});

export const getAllBrandsSuccess = data => ({
  type: GET_ALL_BRAND_SUCCESS,
  payload: { data },
});

export const getAllBrandsFailed = message => ({
  type: GET_ALL_BRAND_FAILED,
  payload: { message },
});
