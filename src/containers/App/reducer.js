import produce from 'immer';
import { FETCH_LOGIN_SUCCESS, SET_AUTHENTICATION } from './constants';
import { DELETE_USERS_SUCCESS } from '../ListUser/constants';

export const initialState = {
  auth: null,
};
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_LOGIN_SUCCESS: {
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
      case DELETE_USERS_SUCCESS: {
        window.location.href = '/admin/users';
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
