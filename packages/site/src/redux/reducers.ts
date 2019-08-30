/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable global-require */
import produce from 'immer';
import { combineReducers } from 'redux-immer';

import Theme from './theme';

export const createReducers = (): any =>
  combineReducers(produce, {
    theme: Theme,
  });
