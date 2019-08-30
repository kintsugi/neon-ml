import { Selector, createSelector } from 'reselect';

export const makeSelectDomain = <State, DomainState>(
  domain: string
): Selector<State, DomainState> => state => state[domain] as DomainState;

export const makeSelectProp = <DomainState, PropType>(
  prop: string
): Selector<DomainState, PropType> => state => state[prop] as PropType;

export const makeSelectPropIn = <State, DomainState, PropType>(
  domain: string,
  prop: string
): Selector<State, PropType> => {
  const selectDomain = makeSelectDomain<State, DomainState>(domain);
  const selectProp = makeSelectProp<DomainState, PropType>(prop);
  return createSelector(
    selectDomain,
    selectProp
  );
};
