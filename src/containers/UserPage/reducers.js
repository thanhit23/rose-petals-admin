import produce from 'immer';
import { LIST_USERS } from './constants';

const initialState = {
  users: null,
  meta: {},
};

const headerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LIST_USERS:
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
