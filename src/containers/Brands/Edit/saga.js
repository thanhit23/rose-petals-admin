import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_DETAIL_BRAND_REQUEST, UPDATE_BRAND_REQUEST } from './constants';
import { getDetailBrandSuccess, getDetailBrandFailed, updateBrandSuccess, updateBrandFailed } from './actions';
import { getDetailBrand, updateBrand as updateBrandService } from './service';
import { uploadFile as uploadFileService } from '../../UploadFile/service';

function* updateBrand({ payload: { id, data, file, callback } }) {
  if (file) {
    const res = yield call(uploadFileService, file);
    const {
      data: { status, data: dataFile, message },
    } = res;

    if (status) {
      Object.assign(data, { logo: dataFile[dataFile.length - 1] });
    } else {
      yield put(updateBrandFailed(message));
    }
  }

  const { id: idBrand, ...dataUpdate } = data;

  const res = yield call(updateBrandService, id, { ...dataUpdate });

  const {
    data: { status, message },
  } = res;

  if (status) {
    yield put(updateBrandSuccess());
    if (callback instanceof Function) callback();
  } else {
    yield put(updateBrandFailed(message));
  }
}

function* getDetail({ payload: { id } }) {
  const res = yield call(getDetailBrand, id);

  const { status, data } = res;

  if (status) {
    yield put(getDetailBrandSuccess(data));
  } else {
    const { message } = data;
    yield put(getDetailBrandFailed(message));
  }
}

function* editBrand() {
  yield takeEvery(GET_DETAIL_BRAND_REQUEST, getDetail);
  yield takeEvery(UPDATE_BRAND_REQUEST, updateBrand);
}

export default editBrand;
