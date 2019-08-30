import { ThemeState } from './theme/state';
import { UserState } from './user/state';

export interface State {
  theme: ThemeState;
  user: UserState;
}
