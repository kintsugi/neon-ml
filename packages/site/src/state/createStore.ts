import { applyMiddleware, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createReducers } from './reducers';
import { rootSaga } from '../sagas';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middleware)];
  const store = createStore(
    createReducers(),
    composeWithDevTools(...enhancers)
  );

  sagaMiddleware.run(rootSaga);
  return store;
};
