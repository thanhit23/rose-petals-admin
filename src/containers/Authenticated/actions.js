import { CHECK_TOKEN_REQUEST, CHECK_TOKEN_SUCCESS, CHECK_TOKEN_FAILED, REDIRECT_LOGIN } from './constants';
import { SET_AUTHENTICATION } from '../HomePage/constants';

export const sendRequestToken = token => {
  return {
    type: CHECK_TOKEN_REQUEST,
    payload: {
      token,
    },
  };
};

export const redirectLogin = () => ({
  type: REDIRECT_LOGIN,
});

export const setAuth = user => ({
  type: SET_AUTHENTICATION,
  payload: {
    user,
  },
});

export const checkTokenSuccess = () => ({
  type: CHECK_TOKEN_SUCCESS,
});

export const checkTokenFailed = () => ({
  type: CHECK_TOKEN_FAILED,
});
