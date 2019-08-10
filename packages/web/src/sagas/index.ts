import { SagaIterator } from 'redux-saga';
import { all } from 'redux-saga/effects';

/* ------------- Types ------------- */

/* ------------- Sagas ------------- */

/* ------------- Connect Types To Sagas ------------- */

export function* rootSaga(): SagaIterator {
  yield all([]);
}
