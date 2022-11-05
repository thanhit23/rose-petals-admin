import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_TABLE_REQUEST,
  DELETE_USERS_REQUEST,
  DELETE_USERS_SUCCESS,
  DELETE_USERS_FAILED,
  FETCH_USERS_FAILED,
} from './constants';

export const getUsers = () => ({
  type: FETCH_USERS_REQUEST,
});
export const getUsersSuccess = ({ data, meta }) => ({
  type: FETCH_USERS_SUCCESS,
  payload: {
    data,
    meta,
  },
});
export const getUsersListFailed = messages => ({
  type: FETCH_USERS_FAILED,
  payload: { messages },
});

export const getUsersForTable = index => ({
  type: FETCH_USERS_TABLE_REQUEST,
  payload: {
    index,
  },
});

export const deleteUsers = (id, navigate) => ({
  type: DELETE_USERS_REQUEST,
  payload: { id },
  navigate,
});

export const deleteUserSuccess = () => ({
  type: DELETE_USERS_SUCCESS,
});

export const deleteUserFailed = () => ({
  type: DELETE_USERS_FAILED,
});
