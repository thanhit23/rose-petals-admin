import produce from 'immer';

import { GET_PRODUCTS_SUCCESS_TABLE } from './constants';
import {
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_BRAND_SUCCESS,
} from '../Add/constants';
import {
  DELETE_DETAIL_PRODUCT_OLD,
  GET_DETAIL_PRODUCT_SUCCESS,
} from '../Edit/constants';
const initialState = {
  list: {
    data: [],
    meta: {},
  },
  categories: [],
  brands: [],
  edit: {},
};

const productReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_PRODUCTS_SUCCESS_TABLE: {
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
        draft.categories = data;
        break;
      }
      case GET_ALL_BRAND_SUCCESS: {
        const {
          payload: { data },
        } = action;
        draft.brands = data;
        break;
      }
      case DELETE_DETAIL_PRODUCT_OLD: {
        draft.edit = {};
        break;
      }
      case GET_DETAIL_PRODUCT_SUCCESS: {
        const {
          payload: { data },
        } = action;
        draft.edit = data;
        break;
      }
      default:
        break;
    }
  });

export default productReducer;
