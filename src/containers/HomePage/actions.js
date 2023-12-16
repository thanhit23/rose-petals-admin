import { AUTHENTICATION, GET_ANALYTICS, SET_AUTHENTICATION, GET_ANALYTICS_SUCCESS } from './constants';

export const checkAuth = () => ({
  type: AUTHENTICATION,
});

export const setAuth = user => ({
  type: SET_AUTHENTICATION,
  payload: {
    user,
  },
});

export const getAnalytics = token => ({
  type: GET_ANALYTICS,
  payload: {
    token,
  },
});

export const getAnalyticsSuccess = data => ({
  type: GET_ANALYTICS_SUCCESS,
  payload: {
    data,
  },
});
