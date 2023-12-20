import { takeEvery, call, put } from 'redux-saga/effects';
import { ADD_BRAND_REQUEST } from './constants';
import { addBrand as addBrandService } from './service';
import { addBrandSuccess, addBrandFailed } from './actions';
import { uploadFile as uploadFileService } from '../../UploadFile/service';

function* addBrand({ payload: { data, file, callback } }) {
  if (file) {
    const res = yield call(uploadFileService, file);
    const {
      data: { status, data: dataFile, message },
    } = res;

    if (status) {
      Object.assign(data, { logo: dataFile[dataFile.length - 1] });
    } else {
      yield put(addBrandFailed(message));
    }
  }

  const res = yield call(addBrandService, data);
  const {
    data: { status, message },
  } = res;

  if (status) {
    yield put(addBrandSuccess());
    if (callback instanceof Function) callback();
  } else {
    yield put(addBrandFailed(message));
  }
}

function* addBrandSaga() {
  yield takeEvery(ADD_BRAND_REQUEST, addBrand);
}

export default addBrandSaga;
