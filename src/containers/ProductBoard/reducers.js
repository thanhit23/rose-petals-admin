import produce, { current } from 'immer';
import { toast } from 'react-toastify';

import {
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_REQ,
  FETCH_PRODUCT_ERROR,
  PRODUCT_UPDATE_FAILED,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAILED,
} from './constants';

const initialState = {
  listProduct: [],
};

const productReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case FETCH_PRODUCT_REQ:
        draft.listProduct = [];
        break;
      case FETCH_PRODUCT_SUCCESS: {
        const {
          payload: { data },
        } = action;
        draft.listProduct = data;
        break;
      }
      case FETCH_PRODUCT_ERROR:
        draft.listProduct = [];
        break;
      case PRODUCT_UPDATE_SUCCESS: {
        const { listProduct } = current(draft);
        const {
          payload: { data },
        } = action;
        const { id } = data;
        const index = listProduct.findIndex(item => item.id === id);
        draft.listProduct[index] = data;
        break;
      }
      case PRODUCT_UPDATE_FAILED: {
        const {
          payload: {
            error: { message },
          },
        } = action;
        toast.error(message);
        break;
      }
      case PRODUCT_DELETE_SUCCESS: {
        const { listProduct } = current(draft);
        const {
          payload: { data },
        } = action;
        const index = listProduct.findIndex(({ id }) => id === data.id);
        draft.listProduct.splice(index, 1);
        break;
      }
      case PRODUCT_DELETE_FAILED: {
        const {
          payload: {
            error: { message },
          },
        } = action;
        toast.error(message);
        break;
      }
    }
  });

export default productReducer;
