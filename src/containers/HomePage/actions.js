import { AUTHENTICATION, SET_AUTHENTICATION } from './constants';

export const checkAuth = () => ({
  type: AUTHENTICATION,
});

export const setAuth = user => ({
  type: SET_AUTHENTICATION,
  payload: {
    user,
  },
});
