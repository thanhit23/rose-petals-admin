import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
} from './constants';

export const createUser = (data, navigate) => ({
  type: CREATE_USER_REQUEST,
  payload: { data },
  navigate,
});
export const createUserSuccessfully = () => ({
  type: CREATE_USER_SUCCESS,
});
export const createUserFailed = message => ({
  type: CREATE_USER_FAILED,
  payload: { message },
});
