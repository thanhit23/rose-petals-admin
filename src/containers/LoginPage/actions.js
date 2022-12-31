import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from './constants';

export const accountLogin = ({ email, password }) => ({
  type: LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const logged = (access, refresh, user) => ({
  type: LOGIN_SUCCESS,
  payload: {
    access,
    refresh,
    user,
  },
});

export const loginFailed = error => ({
  type: LOGIN_FAILED,
  payload: {
    error,
  },
});
