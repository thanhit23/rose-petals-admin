import {
  GET_CATEGORY_REQUEST_TABLE,
  GET_CATEGORY_SUCCESS_TABLE,
  GET_CATEGORY_FAILED_TABLE,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_FAILED,
  DELETE_CATEGORY_SUCCESS,
} from './constants';

export const getCategories = options => ({
  type: GET_CATEGORY_REQUEST_TABLE,
  payload: { options },
});

export const getCategoriesSuccess = data => ({
  type: GET_CATEGORY_SUCCESS_TABLE,
  payload: { data },
});

export const getCategoriesFailed = message => ({
  type: GET_CATEGORY_FAILED_TABLE,
  payload: { message },
});

export const deleteCategory = (id, callback) => ({
  type: DELETE_CATEGORY_REQUEST,
  payload: { id, callback },
});

export const deleteCategoryFailed = message => ({
  type: DELETE_CATEGORY_FAILED,
  payload: { message },
});

export const deleteCategorySuccess = () => ({
  type: DELETE_CATEGORY_SUCCESS,
});
