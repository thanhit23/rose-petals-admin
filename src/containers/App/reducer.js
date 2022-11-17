import produce from 'immer';
import { FETCH_LOGIN_SUCCESS, SET_AUTHENTICATION } from './constants';

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
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
        draft.auth = user;
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
