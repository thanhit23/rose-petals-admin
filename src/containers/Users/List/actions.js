import {
  GET_USERS_LIST_REQUEST,
  GET_USERS_LIST_SUCCESS,
  DELETE_USERS_REQUEST,
  DELETE_USERS_SUCCESS,
  DELETE_USERS_FAILED,
  GET_USERS_LIST_FAILED,
} from './constants';

export const getUsers = options => ({
  type: GET_USERS_LIST_REQUEST,
  payload: {
    options,
  },
});

export const getUsersSuccess = ({ data, meta }) => ({
  type: GET_USERS_LIST_SUCCESS,
  payload: {
    data,
    meta,
  },
});

export const getUsersListFailed = messages => ({
  type: GET_USERS_LIST_FAILED,
  payload: { messages },
});

export const deleteUsers = id => ({
  type: DELETE_USERS_REQUEST,
  payload: { id },
});

export const deleteUserSuccess = () => ({
  type: DELETE_USERS_SUCCESS,
});

export const deleteUserFailed = () => ({
  type: DELETE_USERS_FAILED,
});
