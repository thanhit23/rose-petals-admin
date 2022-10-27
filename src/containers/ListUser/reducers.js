import produce from 'immer';
import { FETCH_USERS_SUCCESS } from './constants';

const initialState = {
  users: null,
  meta: {},
};

const headerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_USERS_SUCCESS:
        const {
          payload: { data, meta },
        } = action;
        draft.users = data;
        draft.meta = meta;
        break;
      default:
        break;
    }
  });

export default headerReducer;
