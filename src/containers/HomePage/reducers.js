import produce from 'immer';

import {
  CLOSE_MODAL,
  OPEN_MODAL,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
  PRODUCT_EDIT,
} from './constants';

const initialState = {
  isModal: false,
  title: '',
  listProduct: [],
  productEditing: null,
};

const headerReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case CLOSE_MODAL:
        draft.title = null;
        draft.isModal = false;
        break;
      case OPEN_MODAL:
        const { title } = action;
        draft.title = title;
        draft.isModal = true;
        draft.productEditing = null;
        break;
      case ADD_PRODUCT_SUCCESS: {
        const {
          payload: { data },
        } = action;
        draft.listProduct = draft.listProduct.concat([data]);
        break;
      }
      case ADD_PRODUCT_FAILED:
        const {
          payload: { error },
        } = action;
        return {
          ...draft,
          error,
        };
      case PRODUCT_EDIT: {
        const {
          payload: { data },
        } = action;
        draft.productEditing = data;
      }
    }
  });

export default headerReducer;
