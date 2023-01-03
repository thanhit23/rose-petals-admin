import produce from 'immer';
import { GET_USERS_LIST_SUCCESS } from './constants';
import { GET_USER_SUCCESS, RESET_USER_EDIT } from '../Edit/constants';

const initialState = {
  list: {
    data: [],
    meta: {},
  },
  edit: {},
};

const listUser = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_USERS_LIST_SUCCESS: {
        const {
          payload: { data, meta },
        } = action;
        draft.list.data = data;
        draft.list.meta = meta;
        break;
      }
      case GET_USER_SUCCESS: {
        const {
          payload: {
            data: { data },
          },
        } = action;
        draft.edit = data;
        break;
      }
      case RESET_USER_EDIT: {
        draft.edit = {};
        break;
      }
      default:
        break;
    }
  });

export default listUser;
