import produce from 'immer';
import { FETCH_LOGIN_SUCCESS, SET_AUTHENTICATION } from './constants';
import { FETCH_LOGIN_ERROR } from '../LoginPage/constants';
import { FETCH_USERS_FAILED, FETCH_USERS_SUCCESS } from '../ListUser/constants';

export const initialState = {
  auth: null,
  toastMessage: {
    type: true,
    message: null,
  },
};
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_LOGIN_SUCCESS: {
        draft.toastMessage.message = 'Login Successfully';
        const {
          payload: {
            access: { token },
            refresh: { token: refreshToken },
            user,
          },
        } = action;
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('refreshToken', refreshToken);
        draft.auth = user;
        break;
      }
      case FETCH_LOGIN_ERROR: {
        const {
          payload: { error },
        } = action;
        draft.toastMessage.type = false;
        draft.toastMessage.message = error;
        break;
      }
      case FETCH_USERS_SUCCESS: {
        draft.toastMessage.message = 'Get user success';
        break;
      }
      case FETCH_USERS_FAILED: {
        const {
          payload: { messages },
        } = action;
        draft.toastMessage.type = false;
        draft.toastMessage.message = messages;
        break;
      }
      case SET_AUTHENTICATION: {
        const {
          payload: { user },
        } = action;
        draft.auth = user;
        break;
      }
      default:
        break;
    }
  });

export default appReducer;
