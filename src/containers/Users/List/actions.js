import {
  GET_USERS_REQUEST_TABLE,
  GET_USERS_SUCCESS_TABLE,
  DELETE_USERS_REQUEST,
  DELETE_USERS_SUCCESS,
  DELETE_USERS_FAILED,
  GET_USERS_FAILED_TABLE,
} from './constants';

export const getUsers = options => ({
  type: GET_USERS_REQUEST_TABLE,
  payload: {
    options,
  },
});

export const getUsersSuccess = ({ data, meta }) => ({
  type: GET_USERS_SUCCESS_TABLE,
  payload: {
    data,
    meta,
  },
});

export const getUsersListFailed = messages => ({
  type: GET_USERS_FAILED_TABLE,
  payload: { messages },
});

export const deleteUsers = (id, callback) => ({
  type: DELETE_USERS_REQUEST,
  payload: { id, callback },
});

export const deleteUserSuccess = () => ({
  type: DELETE_USERS_SUCCESS,
});

export const deleteUserFailed = () => ({
  type: DELETE_USERS_FAILED,
});
