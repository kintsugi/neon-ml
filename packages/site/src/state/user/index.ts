import { makeSelectDomain, makeSelectPropIn } from '@utils/select-prop';

import { Selector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { State } from '../state';
import { UserState } from './state';

const INITIAL_STATE: UserState = {
  token: '',
  loggedIn: false,
};

export const selectUser: Selector<State, UserState> = makeSelectDomain('user');
export const selectToken: Selector<State, string> = makeSelectPropIn<
  State,
  UserState,
  string
>('user', 'token');

export const selectLoggedIn: Selector<State, boolean> = makeSelectPropIn<
  State,
  UserState,
  boolean
>('user', 'loggedIn');

const actionCreator = actionCreatorFactory('USER');

export const changeToken = actionCreator<string>('CHANGE_TOKEN');
export const changeLoggedIn = actionCreator<boolean>('CHANGE_LOGGED_IN');

const onChangeToken = (state: UserState, token: string): UserState => ({
  ...state,
  token,
});

const onChangeLoggedIn = (state: UserState, loggedIn: boolean): UserState => ({
  ...state,
  loggedIn,
});

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(changeToken, onChangeToken)
  .case<boolean>(changeLoggedIn, onChangeLoggedIn);
export default reducer.build();
