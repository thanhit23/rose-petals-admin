import produce from 'immer';
import { GET_CATEGORY_SUCCESS } from './constants';

const initialState = {
  data: null,
};

const categoryReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_CATEGORY_SUCCESS:
        const {
          payload: { data },
        } = action;
        draft.data = data;
        break;
      default:
        break;
    }
  });

export default categoryReducer;
