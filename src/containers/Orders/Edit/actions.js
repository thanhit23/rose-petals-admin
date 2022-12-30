import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  DELETE_USER_DATA_EDIT,
} from './constants';

export const getUser = (id, callback) => ({
  type: GET_USER_REQUEST,
  payload: { id, callback },
});

export const deleteUserEditOld = () => ({
  type: DELETE_USER_DATA_EDIT,
});

export const getUserSuccessfully = data => ({
  type: GET_USER_SUCCESS,
  payload: {
    data,
  },
});
export const getUserFailed = () => ({
  type: GET_USER_FAILED,
});

export const updateUser = (id, data, callback) => ({
  type: UPDATE_USER_REQUEST,
  payload: { id, data, callback },
});
export const updateUserSuccessfully = () => ({
  type: UPDATE_USER_SUCCESS,
});
export const updateUserFailed = () => ({
  type: UPDATE_USER_FAILED,
});
