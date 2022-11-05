import { call, put, takeEvery } from 'redux-saga/effects';
import { UPDATE_CATEGORY_REQUEST } from './constants';
import { update } from './service';
import { updateCategorySuccessfully, updateCategoryFailed } from './actions';

function* updateCategoryInformation({ payload: { id, data }, navigate }) {
  const res = yield call(update, id, data);
  const {
    data: { status },
  } = res;
  if (status) {
    yield put(updateCategorySuccessfully());
    navigate('/admin/categories');
  } else {
    yield put(updateCategoryFailed());
  }
}

function* editCategory() {
  yield takeEvery(UPDATE_CATEGORY_REQUEST, updateCategoryInformation);
}

export default editCategory;
