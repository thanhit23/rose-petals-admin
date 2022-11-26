import {
  GET_DETAIL_PRODUCT_SUCCESS,
  DELETE_DETAIL_PRODUCT_OLD,
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

export const deleteDetailProductOld = () => ({
  type: DELETE_DETAIL_PRODUCT_OLD,
});

export const getDetailProduct = id => ({
  type: GET_DETAIL_PRODUCT_REQUEST,
  payload: { id },
});

export const getDetailProductSuccess = ({ data }) => ({
  type: GET_DETAIL_PRODUCT_SUCCESS,
  payload: { data },
});

export const getDetailProductFailed = () => ({
  type: GET_DETAIL_PRODUCT_FAILED,
});

export const updateProduct = (id, data, callback) => ({
  type: UPDATE_PRODUCT_REQUEST,
  payload: { id, data, callback },
});

export const updateProductSuccess = () => ({
  type: UPDATE_PRODUCT_SUCCESS,
});

export const updateProductFailed = () => ({
  type: UPDATE_PRODUCT_FAILED,
});

export const getAllBrands = () => ({
  type: GET_ALL_BRAND_REQUEST,
});

export const getAllBrandsSuccess = ({ data }) => ({
  type: GET_ALL_BRAND_SUCCESS,
  payload: { data },
});

export const getAllBrandsFailed = () => ({
  type: GET_ALL_BRAND_FAILED,
});

export const getAllCategories = () => ({
  type: GET_ALL_CATEGORY_REQUEST,
});

export const getAllCategoriesSuccess = ({ data }) => ({
  type: GET_ALL_CATEGORY_SUCCESS,
  payload: { data },
});

export const getAllCategoriesFailed = () => ({
  type: GET_ALL_CATEGORY_FAILED,
});
