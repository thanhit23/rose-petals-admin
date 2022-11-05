import {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILED,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_FAILED,
  DELETE_CATEGORY_SUCCESS,
} from './constants';

export const getCategories = () => ({
  type: GET_CATEGORY_REQUEST,
});

export const getCategoriesSuccess = data => ({
  type: GET_CATEGORY_SUCCESS,
  payload: { data },
});

export const getCategoriesFailed = message => ({
  type: GET_CATEGORY_FAILED,
  payload: { message },
});

export const deleteCategory = (id, navigate) => ({
  type: DELETE_CATEGORY_REQUEST,
  payload: { id },
  navigate,
});

export const deleteCategoryFailed = message => ({
  type: DELETE_CATEGORY_FAILED,
  payload: { message },
});

export const deleteCategorySuccess = () => ({
  type: DELETE_CATEGORY_SUCCESS,
});
