import produce from 'immer';

import { TOGGLE_SIDEBAR } from './constants';

const initialState = {
  isSidebar: false,
};

const headerReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case TOGGLE_SIDEBAR:
        draft.isSidebar = !draft.isSidebar;
        break;
    }
  });

export default headerReducer;
