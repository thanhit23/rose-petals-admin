import {
  GET_PRODUCTS_REVIEW_LIST_REQUEST,
  GET_PRODUCTS_REVIEW_LIST_SUCCESS,
  GET_PRODUCTS_REVIEW_LIST_FAILED,
} from './constants';

export const getProductReview = options => ({
  type: GET_PRODUCTS_REVIEW_LIST_REQUEST,
  payload: { options },
});

export const getProductReviewSuccess = ({ data, meta }) => ({
  type: GET_PRODUCTS_REVIEW_LIST_SUCCESS,
  payload: {
    data,
    meta,
  },
});

export const getProductReviewFailed = () => ({
  type: GET_PRODUCTS_REVIEW_LIST_FAILED,
});
