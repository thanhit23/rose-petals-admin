import produce from 'immer';

import {
  _REQUEST,
  _FAILED,
  _SUCCESS,
  _REQUEST_TABLE,
  _FAILED_TABLE,
  _SUCCESS_TABLE,
} from './constants';

const initialState = {
  showLoading: false,
  showLoadingTable: false,
};

const loadingReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      default:
        const text = action.type;
        const position = text.lastIndexOf('_');
        const result = text.substr(position);
        const resultTable = text.substr(-14);
        if (resultTable === _REQUEST_TABLE) draft.showLoadingTable = true;
        if (resultTable === _FAILED_TABLE) draft.showLoadingTable = false;
        if (resultTable === _SUCCESS_TABLE) draft.showLoadingTable = false;
        if (result === _REQUEST) draft.showLoading = true;
        if (result === _FAILED) draft.showLoading = false;
        if (result === _SUCCESS) draft.showLoading = false;
        break;
    }
  });

export default loadingReducer;
