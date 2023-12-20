import {
  GET_PRODUCTS_REVIEW_LIST_REQUEST,
  GET_PRODUCTS_REVIEW_LIST_SUCCESS,
  GET_PRODUCTS_REVIEW_LIST_FAILED,
  DELETE_PRODUCTS_REVIEW_LIST_FAILED,
  DELETE_PRODUCTS_REVIEW_LIST_SUCCESS,
  DELETE_PRODUCTS_REVIEW_LIST_REQUEST,
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

export const getProductReviewFailed = message => ({
  type: GET_PRODUCTS_REVIEW_LIST_FAILED,
  payload: { message },
});

export const deleteProductReview = (data, callback) => ({
  type: DELETE_PRODUCTS_REVIEW_LIST_REQUEST,
  payload: { data, callback },
});

export const deleteProductReviewSuccess = () => ({
  type: DELETE_PRODUCTS_REVIEW_LIST_SUCCESS,
});

export const deleteProductReviewFailed = message => ({
  type: DELETE_PRODUCTS_REVIEW_LIST_FAILED,
  payload: { message },
});
