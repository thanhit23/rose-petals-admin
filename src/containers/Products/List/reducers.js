import produce from 'immer';

import { GET_PRODUCTS_SUCCESS } from './constants';
const initialState = {
  list: {
    data: [],
    meta: {},
  },
};

const productReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_PRODUCTS_SUCCESS: {
        const {
          payload: { data, meta },
        } = action;
        draft.list.data = data;
        draft.list.meta = meta;
        break;
      }
      default:
        break;
    }
  });

export default productReducer;
