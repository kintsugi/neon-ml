import { Selector, createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { State } from '../state';
import { ThemeState } from './state';

export interface ThemeState {
  mode: string;
}

const INITIAL_STATE: ThemeState = {
  mode: 'dark',
};

export const selectTheme: Selector<State, ThemeState> = state => state.theme;
export const selectMode: Selector<ThemeState, string> = theme => theme.mode;
export const selectThemeMode: Selector<State, string> = createSelector(
  selectTheme,
  selectMode
);

const actionCreator = actionCreatorFactory('THEME');

export const changeThemeMode = actionCreator<string>('CHANGE_THEME');

const onChangeTheme = (state: ThemeState, mode: string): ThemeState => {
  return { ...state, mode };
};

const reducer = reducerWithInitialState(INITIAL_STATE).case(
  changeThemeMode,
  onChangeTheme
);

export default reducer.build();
