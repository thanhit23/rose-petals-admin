import {
  FETCH_USERS_REQUEST_TABLE,
  FETCH_USERS_SUCCESS_TABLE,
  DELETE_USERS_REQUEST,
  DELETE_USERS_SUCCESS,
  DELETE_USERS_FAILED,
  FETCH_USERS_FAILED_TABLE,
} from './constants';

export const getUsers = options => ({
  type: FETCH_USERS_REQUEST_TABLE,
  payload: {
    options,
  },
});

export const getUsersSuccess = ({ data, meta }) => ({
  type: FETCH_USERS_SUCCESS_TABLE,
  payload: {
    data,
    meta,
  },
});

export const getUsersListFailed = messages => ({
  type: FETCH_USERS_FAILED_TABLE,
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
