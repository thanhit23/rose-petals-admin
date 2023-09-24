import produce from 'immer';

import { LOGIN_SUCCESS, SET_AUTHENTICATION } from './constants';
import { TOAST_ERROR, RESET_MESSAGE } from '../ToastMessage/constants';
import { TOGGLE_SIDEBAR } from '../SideBar/constants';

export const initialState = {
  auth: null,
  loading: {
    showLoading: false,
    showLoadingTable: false,
  },
  toast: {
    type: null,
    message: null,
  },
  sidebar: {
    isSidebarOpen: true,
  },
};

const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_SUCCESS: {
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
      case TOGGLE_SIDEBAR:
        draft.sidebar.isSidebarOpen = !draft.sidebar.isSidebarOpen;
        break;
      case RESET_MESSAGE:
        draft.toast.type = null;
        draft.toast.message = null;
        break;
      default:
        const text = action.type;

        draft.loading.showLoading = text.includes('_REQUEST') && !text.includes('LIST_REQUEST');

        draft.loading.showLoadingTable = text.includes('LIST_REQUEST');

        if (text.includes('_FAILED')) {
          const {
            payload: { message },
          } = action;
          draft.toast.type = TOAST_ERROR;
          draft.toast.message = message;
        }
        break;
    }
  });

export default appReducer;
