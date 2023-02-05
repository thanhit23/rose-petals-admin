import {
  GET_DETAIL_PRODUCT_SUCCESS,
  RESET_PRODUCT_EDIT,
  GET_DETAIL_PRODUCT_FAILED,
  UPDATE_PRODUCT_FAILED,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  GET_DETAIL_PRODUCT_REQUEST,
  GET_ALL_CATEGORY_REQUEST,
  GET_ALL_BRAND_REQUEST,
  GET_ALL_CATEGORY_FAILED,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_BRAND_SUCCESS,
  GET_ALL_BRAND_FAILED,
} from './constants';

export const resetProductEdit = () => ({
  type: RESET_PRODUCT_EDIT,
});

export const getDetailProduct = id => ({
  type: GET_DETAIL_PRODUCT_REQUEST,
  payload: { id },
});

export const getDetailProductSuccess = ({ data }) => ({
  type: GET_DETAIL_PRODUCT_SUCCESS,
  payload: { data },
});

export const getDetailProductFailed = message => ({
  type: GET_DETAIL_PRODUCT_FAILED,
  payload: { message },
});

export const updateProduct = (id, data, file, callback) => ({
  type: UPDATE_PRODUCT_REQUEST,
  payload: { id, data, file, callback },
});

export const updateProductSuccess = () => ({
  type: UPDATE_PRODUCT_SUCCESS,
});

export const updateProductFailed = message => ({
  type: UPDATE_PRODUCT_FAILED,
  payload: { message },
});

export const getAllBrands = () => ({
  type: GET_ALL_BRAND_REQUEST,
});

export const getAllBrandsSuccess = ({ data }) => ({
  type: GET_ALL_BRAND_SUCCESS,
  payload: { data },
});

export const getAllBrandsFailed = message => ({
  type: GET_ALL_BRAND_FAILED,
  payload: { message },
});

export const getAllCategories = () => ({
  type: GET_ALL_CATEGORY_REQUEST,
});

export const getAllCategoriesSuccess = ({ data }) => ({
  type: GET_ALL_CATEGORY_SUCCESS,
  payload: { data },
});

export const getAllCategoriesFailed = message => ({
  type: GET_ALL_CATEGORY_FAILED,
  payload: { message },
});
