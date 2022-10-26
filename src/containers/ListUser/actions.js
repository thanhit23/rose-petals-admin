import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_TABLE_REQUEST,
  DELETE_USERS_REQUEST,
  FETCH_USERS_FAILED,
} from './constants';

export const fetchUsers = () => ({
  type: FETCH_USERS_REQUEST,
});
export const getListUsers = ({ data, meta }) => ({
  type: FETCH_USERS_SUCCESS,
  payload: {
    data,
    meta,
  },
});
export const getListUsersFailed = messages => ({
  type: FETCH_USERS_FAILED,
  payload: { messages },
});

export const fetchUsersForTable = index => ({
  type: FETCH_USERS_TABLE_REQUEST,
  payload: {
    index,
  },
});

export const deleteUsers = id => ({
  type: DELETE_USERS_REQUEST,
  payload: { id },
});
