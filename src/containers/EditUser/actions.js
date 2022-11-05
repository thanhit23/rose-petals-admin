import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
} from './constants';

export const updateUser = (id, data, navigate) => ({
  type: UPDATE_USER_REQUEST,
  payload: { id, data },
  navigate,
});
export const updateUserSuccessfully = () => ({
  type: UPDATE_USER_SUCCESS,
});
export const updateUserFailed = () => ({
  type: UPDATE_USER_FAILED,
});
