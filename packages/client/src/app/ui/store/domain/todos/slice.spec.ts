import { state } from '~client/app/ui/store/mock';

import * as Slice from './slice';

describe('slice', () => {
  describe('toInitialState', () => {
    it('when run toInitialState, then state is same value with initialState', () => {
      const featureState = state.domain.todos;

      const result = Slice.reducer(featureState, Slice.actions.toInitialState);

      expect(result).toStrictEqual(Slice.initialState);
    });
  });
});
