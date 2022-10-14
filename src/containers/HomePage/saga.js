import { takeLatest } from 'redux-saga/effects';
import { AUTHENTICATION } from './constants';

function* checkAuthentication() {
  yield 'a';
}

function* homeSaga() {
  yield takeLatest(AUTHENTICATION, checkAuthentication);
}

export default homeSaga;
