import { combineReducers } from 'redux-immer';
import produce from 'immer';
import Theme from './theme';
import User from './user';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable global-require */

export const createReducers = (): any =>
  combineReducers(produce, {
    theme: Theme,
    user: User,
  });
