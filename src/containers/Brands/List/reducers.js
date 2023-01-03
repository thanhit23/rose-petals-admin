import produce from 'immer';
import { GET_BRAND_SUCCESS_TABLE } from './constants';
import { RESET_BRAND_EDIT, GET_DETAIL_BRAND_SUCCESS } from '../Edit/constants';

const initialState = {
  list: {
    data: [],
    meta: {},
  },
  edit: {},
};

const listBrand = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_BRAND_SUCCESS_TABLE: {
        const {
          payload: { data, meta },
        } = action;
        draft.list.data = data;
        draft.list.meta = meta;
        break;
      }
      case GET_DETAIL_BRAND_SUCCESS: {
        const {
          payload: { data },
        } = action;
        draft.edit = data;
        break;
      }
      case RESET_BRAND_EDIT: {
        draft.edit = {};
        break;
      }
      default:
        break;
    }
  });

export default listBrand;
