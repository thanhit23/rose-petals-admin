import produce from 'immer';

import { _REQUEST_TABLE, _FAILED_TABLE, _SUCCESS_TABLE } from './constants';

const initialState = {
  showLoadingTable: false,
};

const loadingReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      default:
        const text = action.type;
        const result = text.substr(-14);
        if (result === _REQUEST_TABLE) draft.showLoadingTable = true;
        if (result === _FAILED_TABLE) draft.showLoadingTable = false;
        if (result === _SUCCESS_TABLE) draft.showLoadingTable = false;
        break;
    }
  });

export default loadingReducer;
