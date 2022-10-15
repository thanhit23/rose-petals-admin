import produce from 'immer';
import { LIST_USERS } from './constants';

const initialState = {
  users: null,
};

const headerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LIST_USERS:
        const {
          payload: { data },
        } = action;
        draft.users = data;
        break;
      default:
        break;
    }
  });

export default headerReducer;
