import produce from 'immer';
import { GET_CATEGORY_SUCCESS } from './constants';

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
      case GET_CATEGORY_SUCCESS: {
        draft.list.data = [];
        draft.list.meta = {};
        break;
      }
      default:
        break;
    }
  });

export default categoryReducer;
