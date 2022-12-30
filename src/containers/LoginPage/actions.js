import {
  LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILED,
} from './constants';

export const accountLogin = ({ email, password }) => ({
  type: LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const logged = (access, refresh, user) => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: {
    access,
    refresh,
    user,
  },
});

export const loginFailed = error => ({
  type: FETCH_LOGIN_FAILED,
  payload: {
    error,
  },
});
