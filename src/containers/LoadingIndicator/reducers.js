import produce from 'immer';

import { _REQ, _FAILED, _SUCCESS } from './constants';

const initialState = {
  showLoading: false,
};

const loadingReducer = (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      default:
        const text = action.type;
        const position = text.lastIndexOf('_');
        const result = text.substr(position);
        if (result === _REQ) draft.showLoading = true;
        if (result === _FAILED) draft.showLoading = false;
        if (result === _SUCCESS) draft.showLoading = false;
        break;
    }
  });

export default loadingReducer;
