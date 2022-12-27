import produce from 'immer';
import { GET_CATEGORY_SUCCESS_TABLE } from './constants';
import { GET_CATEGORY_DETAIL_SUCCESS } from '../Edit/constants';

const initialState = {
  list: {
    data: [],
    meta: {},
  },
  edit: null,
};

const categoryReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_CATEGORY_SUCCESS_TABLE: {
        const {
          payload: {
            data: { data, meta },
          },
        } = action;
        draft.list.data = data;
        draft.list.meta = meta;
        break;
      }
      case GET_CATEGORY_DETAIL_SUCCESS: {
        const {
          payload: {
            data: { data },
          },
        } = action;
        draft.edit = data;
        break;
      }
      default:
        break;
    }
  });

export default categoryReducer;
