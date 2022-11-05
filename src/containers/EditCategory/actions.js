import {
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_FAILED,
} from './constants';

export const updateCategory = (id, data, navigate) => ({
  type: UPDATE_CATEGORY_REQUEST,
  payload: { id, data },
  navigate,
});
export const updateCategorySuccessfully = () => ({
  type: UPDATE_CATEGORY_SUCCESS,
});
export const updateCategoryFailed = () => ({
  type: UPDATE_CATEGORY_FAILED,
});
