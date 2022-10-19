import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  LIST_USERS,
  FETCH_USERS_TABLE_REQUEST,
  FETCH_USERS_TABLE_SUCCESS,
} from './constants';

export const fetchUsers = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = () => ({
  type: FETCH_USERS_SUCCESS,
});

export const listUsers = ({ data, meta }) => ({
  type: LIST_USERS,
  payload: {
    data,
    meta,
  },
});

export const fetchUsersForTable = index => ({
  type: FETCH_USERS_TABLE_REQUEST,
  payload: {
    index,
  },
});

export const fetchUsersForTableSuccess = () => ({
  type: FETCH_USERS_TABLE_SUCCESS,
});

export const listUsersForTable = ({ data, meta }) => ({
  type: LIST_USERS,
  payload: {
    data,
    meta,
  },
});
