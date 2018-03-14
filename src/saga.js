import { all } from 'redux-saga/effects';

function* exampleSaga() {} // eslint-disable-line no-empty-function

function* rootSaga() {
  yield all([
    exampleSaga(),
  ]);
}

export default rootSaga;
