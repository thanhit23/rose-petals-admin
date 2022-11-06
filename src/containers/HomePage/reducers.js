import produce from 'immer';
import { TOGGLE_SIDEBAR } from './constants';

const initialState = {
  isSidebar: true,
};

const headerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_SIDEBAR:
        draft.isSidebar = !draft.isSidebar;
        break;
      default:
        break;
    }
  });

export default headerReducer;
