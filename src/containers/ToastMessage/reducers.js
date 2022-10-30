import produce from 'immer';
import { _FAILED, TOAST_ERROR } from './constants';

const initialState = {
  type: null,
  message: null,
};
const toastReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      default:
        const text = action.type;
        const position = text.lastIndexOf('_');
        const result = text.substr(position);
        if (result === _FAILED) {
          const {
            payload: {
              data: { message },
            },
          } = action;
          draft.type = TOAST_ERROR;
          draft.message = message;
        }
        break;
    }
  });

export default toastReducer;
