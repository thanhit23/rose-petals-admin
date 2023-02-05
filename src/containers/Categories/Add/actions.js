import {
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILED,
  CREATE_CATEGORY_REQUEST,
} from './constants';

export const createCategory = (data, callback) => ({
  type: CREATE_CATEGORY_REQUEST,
  payload: { data, callback },
});
export const createCategorySuccessfully = () => ({
  type: CREATE_CATEGORY_SUCCESS,
});
export const createCategoryFailed = message => ({
  type: CREATE_CATEGORY_FAILED,
  payload: { message },
});
