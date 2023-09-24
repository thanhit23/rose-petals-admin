import produce from 'immer';

import { GET_ORDERS_LIST_SUCCESS } from './constants';
import { GET_ORDERS_SUCCESS, RESET_ORDER_EDIT } from '../Edit/constants';
import { GET_ORDER_DETAIL_SUCCESS, RESET_ORDER_DETAIL, GET_ORDER_SUCCESS } from '../Detail/constants';

const initialState = {
  list: {
    data: [],
    meta: {},
  },
  edit: {},
  detail: {
    order: {},
    product: [],
  },
};

const listUser = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ORDERS_LIST_SUCCESS: {
        const {
          payload: { data, meta },
        } = action;
        draft.list.data = data;
        draft.list.meta = meta;
        break;
      }
      case GET_ORDERS_SUCCESS: {
        const {
          payload: {
            data: { data },
          },
        } = action;
        draft.edit = data;
        break;
      }
      case RESET_ORDER_EDIT: {
        draft.edit = {};
        break;
      }
      case GET_ORDER_DETAIL_SUCCESS: {
        const {
          payload: { data },
        } = action;
        draft.detail.product = data;
        break;
      }
      case GET_ORDER_SUCCESS: {
        const {
          payload: { data },
        } = action;
        draft.detail.order = data;
        break;
      }
      case RESET_ORDER_DETAIL: {
        draft.detail.product = {};
        break;
      }
      default:
        break;
    }
  });

export default listUser;
