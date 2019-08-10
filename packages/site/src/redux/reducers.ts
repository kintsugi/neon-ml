import produce from 'immer';
import { combineReducers } from 'redux-immer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createReducers = (): any =>
  combineReducers(produce, {
    /* eslint-disable global-require */
    /* eslint-enable global-require */
  });
