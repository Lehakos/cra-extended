// @flow
import type { Action } from 'shared/types';

// eslint-disable-next-line arrow-parens
export const createMockStore = <S>(state: S) => {
  const dispatched = [];

  return {
    store: {
      dispatch: (action: Action) => dispatched.push(action),
      getState: (): S => state,
    },
    dispatched,
  };
};
