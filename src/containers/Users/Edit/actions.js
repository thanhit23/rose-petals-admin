import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
} from './constants';

export const getUser = id => ({
  type: GET_USER_REQUEST,
  payload: { id },
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
