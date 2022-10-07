import {
  FILTER_PRODUCT_FAILED,
  FILTER_PRODUCT,
  FILTER_PRODUCT_SUCCESS,
} from './constants';

const initialState = {
  filterProduct: [],
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_PRODUCT_FAILED:
      return {
        ...state,
        filterProduct: [],
      };
    case FILTER_PRODUCT_SUCCESS:
      const {
        payload: { data },
      } = action;
      return {
        ...state,
        filterProduct: data,
      };
    case FILTER_PRODUCT:
      return {
        ...state,
        filterProduct: [],
      };
    default:
      return [];
  }
};

export default headerReducer;
