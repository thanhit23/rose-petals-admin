import produce from 'immer';

import { GET_PRODUCTS_SUCCESS } from './constants';
import { GET_ALL_CATEGORY_SUCCESS } from '../Add/constants';
const initialState = {
  list: {
    data: [],
    meta: {},
  },
  add: {
    listCategory: [],
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
      case GET_ALL_CATEGORY_SUCCESS: {
        const {
          payload: { data },
        } = action;
        draft.add.listCategory = data;
        break;
      }
      default:
        break;
    }
  });

export default productReducer;
