import produce from 'immer';
import { GET_ANALYTICS_SUCCESS } from './constants';

const initialState = {
  analytics: {},
};

const headerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ANALYTICS_SUCCESS: {
        const {
          payload: { data },
        } = action;
        draft.analytics = data;
        break;
      }
      default:
        break;
    }
  });

export default headerReducer;
