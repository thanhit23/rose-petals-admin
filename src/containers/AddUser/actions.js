import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
} from './constants';

export const createUser = data => ({
  type: CREATE_USER_REQUEST,
  payload: { data },
});
export const createUserSuccessfully = () => ({
  type: CREATE_USER_SUCCESS,
});
export const createUserFailed = () => ({
  type: CREATE_USER_FAILED,
});
