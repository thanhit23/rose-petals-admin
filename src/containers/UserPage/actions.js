import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  LIST_USERS,
} from './constants';

export const fetchUsers = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = () => ({
  type: FETCH_USERS_SUCCESS,
});

export const listUsers = ({ data }) => ({
  type: LIST_USERS,
  payload: {
    data,
  },
});
