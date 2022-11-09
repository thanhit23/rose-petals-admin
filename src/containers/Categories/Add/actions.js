import {
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILED,
  CREATE_CATEGORY_REQUEST,
} from './constants';

export const createCategory = (data, navigate) => ({
  type: CREATE_CATEGORY_REQUEST,
  payload: { data },
  navigate,
});
export const createCategorySuccessfully = () => ({
  type: CREATE_CATEGORY_SUCCESS,
});
export const createCategoryFailed = () => ({
  type: CREATE_CATEGORY_FAILED,
});
