import { LOGIN_REQUEST, FETCH_LOGIN_SUCCESS } from './constants';
import { TOAST_ERROR } from '../ToastMessage/constants';

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
  type: TOAST_ERROR,
  payload: {
    error,
  },
});
