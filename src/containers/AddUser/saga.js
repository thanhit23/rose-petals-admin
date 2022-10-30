import { call, put, takeEvery } from 'redux-saga/effects';
import { useNavigate } from 'react-router';
import { CREATE_USER_REQUEST } from './constants';
import { createUsers } from './service';
import { createUserSuccessfully, createUserFailed } from './actions';

function* createNewUser({ payload: { data } }) {
  const navigate = useNavigate();
  const res = yield call(createUsers, data);
  const {
    data: { status },
  } = res;
  if (status) {
    yield put(createUserSuccessfully());
    navigate('/admin/users');
  } else {
    yield put(createUserFailed());
  }
}

function* addUser() {
  yield takeEvery(CREATE_USER_REQUEST, createNewUser);
}

export default addUser;
