import {
  LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_ERROR,
} from './constants';
import { toastError } from '../../helpers/toast';

export const fetchLogin = ({ email, password }) => ({
  type: LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const fetchLoginSuccess = (access, user) => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: {
    access,
    user,
  },
});

export const fetchLoginError = error => {
  toastError(error);
  return {
    type: FETCH_LOGIN_ERROR,
    payload: {
      error,
    },
  };
};
