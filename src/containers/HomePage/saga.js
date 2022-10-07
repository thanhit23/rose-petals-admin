import { call, delay, put, takeEvery, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import {
  ADD_PRODUCT,
  STATUS_SUCCESS_CREATE,
  STATUS_SUCCESS,
  PRODUCT_UPDATE_REQ,
} from './constants';
import { addProductFailed, addProductSuccess, closeModal } from './actions';
import {
  updateProductFailed,
  updateProductSuccess,
} from '../ProductBoard/actions';
import { addProduct, updateProducts } from '../../apis';

function* addProductSaga({ payload }) {
  const { name, price } = payload;
  const res = yield call(addProduct, {
    name,
    price: Number(price),
  });
  const { status, data } = res;
  if (STATUS_SUCCESS_CREATE === status) {
    yield put(addProductSuccess(data));
    yield put(closeModal());
    toast.success('Create Successfully');
  } else {
    yield put(addProductFailed(data));
  }
  yield delay(500);
}

function* updateProductSaga({ payload }) {
  const { name, price } = payload;
  const productEdit = yield select(
    ({
      home: {
        productEditing: { id },
      },
    }) => id,
  );
  const res = yield call(updateProducts, { name, price }, productEdit);
  const { status, data } = res;
  if (STATUS_SUCCESS === status) {
    yield put(updateProductSuccess(data));
    yield put(closeModal());
    toast.success('Update Successfully');
  } else {
    yield put(updateProductFailed(data));
  }
}

function* homeSaga() {
  yield takeEvery(ADD_PRODUCT, addProductSaga);
  yield takeEvery(PRODUCT_UPDATE_REQ, updateProductSaga);
}

export default homeSaga;
